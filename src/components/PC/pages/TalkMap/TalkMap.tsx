import classNames from "classnames/bind";
import * as React from "react";
import talks from "../../../../resource/talks.json";
import { getWorldTalksJson } from "../../../../utils/getTalksJson";
import Text from "../../../Common/atoms/Text/Text";
import Map from "../../organisms/Map/Map";
import styles from "./TalkMap.scss";

const cx = classNames.bind(styles);

const TalkMap: React.FC = () => {
  const [countryJson, setCountryJson] = React.useState(
    getWorldTalksJson(talks),
  );
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
