import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkMap.scss";
import Map from "../../organisms/Map/Map";
import Text from "../../atoms/Text/Text";
import { CountryJson } from "../../../types/talks";
import { getCountryJson } from "../../../utils/getCityJson";

const cx = classNames.bind(styles);

const TalkMap: React.FC = () => {
  const [countryJson, setCountryJson] = React.useState(getCountryJson());
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("title")}>
          <Text type="h2" bold italic color="lime">
            Talks
          </Text>
        </div>
        <div className={cx("map")}>
          <Map countryJson={countryJson} />
        </div>
      </div>
    </>
  );
};

export default TalkMap;
