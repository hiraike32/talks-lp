import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Map.scss";
import { geoMercator, geoPath, GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import countries from "../../../resource/110m.json";
import { getScreenSize } from "../../../utils/getDisplayWidth";
import { getCityJson, CityJson } from "../../../utils/getCityJson";

const cx = classNames.bind(styles);

const Map: React.FC = () => {
  const [worldData, setWorldData] = React.useState([]);
  const [cityData, setCityData] = React.useState([] as CityJson[]);

  const projection = (): GeoProjection => {
    return geoMercator()
      .scale(getScreenSize() / 10 + 50)
      .translate([getScreenSize() / 2, getScreenSize() / 5 + 100]);
  };

  React.useEffect(() => {
    //@ts-ignore
    setWorldData(feature(countries, countries.objects.countries).features);
    setCityData(getCityJson());
  }, []);

  return (
    <svg width={"100vw"} height={(getScreenSize() / 5) * 2 + 75}>
      <g className={cx("countries")}>
        {worldData.map((d, i) => (
          <path
            key={`path-${i}`}
            d={geoPath().projection(projection())(d) as string}
            fill={"#A4A4A4"}
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

export default Map;
