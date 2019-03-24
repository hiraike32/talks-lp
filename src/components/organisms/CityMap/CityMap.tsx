import classNames from "classnames/bind";
import * as React from "react";
import styles from "./CityMap.scss";
import { geoMercator, geoPath, GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import countries from "../../../resource/110m.json";
import { getScreenSize } from "../../../utils/getDisplayWidth";
import { getCityJson, CityJson } from "../../../utils/getCityJson";

const cx = classNames.bind(styles);

const CityMap: React.FC = () => {
  //@ts-ignore
  const worldData = feature(countries, countries.objects.countries).features;
  const [cityData, setCityData] = React.useState([] as CityJson[]);

  const projection = (): GeoProjection => {
    return geoMercator()
      .scale(getScreenSize() / 7 + 2)
      .translate([getScreenSize() / 2, (getScreenSize() / 7) * 2 + 17]);
  };

  React.useEffect(() => {
    setCityData(getCityJson());
  }, []);

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
        {cityData &&
          cityData.map((city: CityJson) => (
            <circle
              key={city.city}
              // @ts-ignore
              cx={projection()(city.coordinates)[0]}
              // @ts-ignore
              cy={projection()(city.coordinates)[1]}
              r={city.total / 6 + 10}
              fill="#58FA58"
            />
          ))}
      </g>
      {console.log(cityData)}
    </svg>
  );
};

export default CityMap;
