import classNames from "classnames/bind";
import * as React from "react";
import { getCountryJson } from "../../../utils/getTalksJson";
import Text from "../../atoms/Text/Text";
import Map from "../Map/Map";
import styles from "./TalkMap.scss";

const cx = classNames.bind(styles);

const TalkMap: React.FC = () => {
  const [countryJson, setCountryJson] = React.useState(getCountryJson());
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("title")}>
          <Text type="h2" bold={true} italic={true} color="lime">
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
