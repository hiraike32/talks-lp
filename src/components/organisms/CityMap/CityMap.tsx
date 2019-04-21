import classNames from "classnames/bind";
import { geoMercator, geoPath, GeoProjection } from "d3-geo";
import * as React from "react";
import { feature } from "topojson-client";
import countries from "../../../resource/110m.json";
import { CityJson, TalkJson } from "../../../types/talks";
import { getScreenSize } from "../../../utils/getDisplayWidth";
import { getCityJson, getPagedCityTalkJson } from "../../../utils/getTalksJson";
import styles from "./CityMap.scss";

const cx = classNames.bind(styles);

interface Props {
  pagedTalkJson: TalkJson[][];
  setPagedCityTalkJson: React.Dispatch<React.SetStateAction<TalkJson[][]>>;
  match: any;
}

const CityMap: React.FC<Props> = ({
  match,
  pagedTalkJson,
  setPagedCityTalkJson,
}) => {
  // @ts-ignore
  const worldData = feature(countries, countries.objects.countries).features;
  const [cityData, setCityData] = React.useState(
    getCityJson(match.params.country),
  );
  const mapCenter: [number, number] = [
    cityData[0].coordinates[0],
    cityData[0].coordinates[1],
  ];
  const [selectedCity, setSelectedCity] = React.useState();

  const projection = (): GeoProjection => {
    return geoMercator()
      .scale((getScreenSize() * 2) / 5 + 200)
      .center(mapCenter);
  };

  const handleClickCircle = (city: string) => {
    setPagedCityTalkJson(getPagedCityTalkJson(city, pagedTalkJson));
    setSelectedCity(city);
  };

  return (
    <svg className={cx("svg")}>
      <g>
        {worldData.map((d: any, i: number) => (
          <path
            key={`path-${i}`}
            d={geoPath().projection(projection())(d) as string}
            fill={"#8E8E8E"}
            stroke="#000"
            strokeWidth={0.5}
          />
        ))}
      </g>
      <g>
        {cityData &&
          cityData.map((city: CityJson) => (
            <a key={city.city}>
              <circle
                key={city.city}
                // @ts-ignore
                cx={projection()(city.coordinates)[0]}
                // @ts-ignore
                cy={projection()(city.coordinates)[1]}
                r={city.total / 2 + 10}
                fill={
                  selectedCity && city.city !== selectedCity
                    ? "#0B610B"
                    : "#07ef06"
                }
                className={cx("mapPin")}
                onClick={() => handleClickCircle(city.city)}
              />
              <text
                // @ts-ignore
                x={projection()(city.coordinates)[0] + city.total / 5 + 12}
                // @ts-ignore
                y={projection()(city.coordinates)[1]}
                fontSize="16"
                fill="#fff"
                className={cx("mapText")}
              >
                {city.city}
              </text>
            </a>
          ))}
      </g>
    </svg>
  );
};

export default CityMap;
