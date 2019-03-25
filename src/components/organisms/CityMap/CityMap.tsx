import classNames from "classnames/bind";
import * as React from "react";
import styles from "./CityMap.scss";
import { geoMercator, geoPath, GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import countries from "../../../resource/110m.json";
import { getCityJson } from "../../../utils/getCityJson";
import { CityJson } from "../../../types/talks";
import { getScreenSize } from "../../../utils/getDisplayWidth";

const cx = classNames.bind(styles);

interface Props {
  match?: any;
}

const CityMap: React.FC<Props> = ({ match }) => {
  //@ts-ignore
  const worldData = feature(countries, countries.objects.countries).features;
  const cityData = getCityJson(match.params.country);
  const mapCenter: [number, number] = [
    cityData[0].coordinates[0],
    cityData[0].coordinates[1]
  ];

  const projection = (): GeoProjection => {
    return geoMercator()
      .scale((getScreenSize() * 2) / 5 + 200)
      .center(mapCenter);
  };

  return (
    <svg width={"100vw"} height={"100vh"} className={cx("svg")}>
      <g className={cx("countries")}>
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
      <g className="markers">
        {cityData &&
          cityData.map((city: CityJson) => (
            <a key={city.city}>
              <circle
                key={city.city}
                // @ts-ignore
                cx={projection()(city.coordinates)[0]}
                // @ts-ignore
                cy={projection()(city.coordinates)[1]}
                r={city.total / 6 + 10}
                fill="#58FA58"
                className={cx("mapPin")}
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
