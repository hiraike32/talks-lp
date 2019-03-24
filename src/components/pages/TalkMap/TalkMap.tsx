import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkMap.scss";
import Map from "../../organisms/Map/Map";
import Text from "../../atoms/Text/Text";

const cx = classNames.bind(styles);

const TalkMap: React.FC = () => (
  <>
    <div className={cx("container")}>
      <div className={cx("title")}>
        <Text type="h2" bold italic color="lime">
          Talks
        </Text>
      </div>
      <div className={cx("map")}>
        <Map />
      </div>
    </div>
  </>
);

export default TalkMap;
