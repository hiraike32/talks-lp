import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Map.scss";
import { geoMercator, geoPath, GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import countries from "../../../resource/110m.json";
import { getScreenSize } from "../../../utils/getDisplayWidth";
import { getCountryJson } from "../../../utils/getCityJson";
import { Link } from "react-router-dom";
import { CountryJson } from "../../../types/talks";

const cx = classNames.bind(styles);

type Props = {
  countryJson: CountryJson[];
};

const Map: React.FC<Props> = ({ countryJson }) => {
  //@ts-ignore
  const worldData = feature(countries, countries.objects.countries).features;

  const projection = (): GeoProjection => {
    return geoMercator()
      .scale(getScreenSize() / 7 + 2)
      .translate([getScreenSize() / 2, (getScreenSize() / 7) * 2 + 17]);
  };

  return (
    <svg
      width={"100vw"}
      height={(getScreenSize() / 100) * 47 + 12}
      className={cx("svg")}
    >
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
        {countryJson &&
          countryJson.map((city: CountryJson) => (
            <Link to={`/talks/${city.country}`} key={city.country}>
              <circle
                // @ts-ignore
                cx={projection()(city.coordinates)[0]}
                // @ts-ignore
                cy={projection()(city.coordinates)[1]}
                r={city.total / 5 + 8}
                fill="#58FA58"
                onClick={() => console.log("map")}
                className={cx("mapPin")}
              />
              <text
                // @ts-ignore
                x={projection()(city.coordinates)[0] + city.total / 5 + 10}
                // @ts-ignore
                y={projection()(city.coordinates)[1]}
                fontSize="10"
                fill="#fff"
                className={cx("mapText")}
              >
                {city.country}
              </text>
            </Link>
          ))}
      </g>
      {console.log(countryJson)}
    </svg>
  );
};

export default Map;
