import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Map.scss";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import countries from "../../../resource/110m.json";

const cx = classNames.bind(styles);

const Map: React.FC = () => {
  const [worldData, setWorldData] = React.useState([]);
  const projection = () => {
    return geoMercator()
      .scale(100)
      .translate([800 / 2, 450 / 2]);
  };
  React.useEffect(() => {
    //@ts-ignore
    setWorldData(feature(countries, countries.objects.countries).features);
  }, []);
  return (
    <svg width={800} height={450} viewBox="0 0 800 450">
      <g className="countries">
        {worldData.map((d, i) => (
          <path
            key={`path-${i}`}
            d={geoPath().projection(projection())(d) as string}
            className="country"
            fill={`rgba(38,50,56,${(1 / worldData.length) * i})`}
            stroke="#FFFFFF"
            strokeWidth={0.5}
          />
        ))}
      </g>
      <g className="markers">
        <circle
          //@ts-ignore
          cx={projection()([8, 48])[0]}
          //@ts-ignore
          cy={projection()([8, 48])[1]}
          r={10}
          fill="#E91E63"
          className="marker"
        />
      </g>
    </svg>
  );
};

export default Map;
