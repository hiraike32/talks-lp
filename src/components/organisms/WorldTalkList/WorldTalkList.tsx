import classNames from "classnames/bind";
import * as React from "react";
import styles from "./WorldTalkList.scss";
import Text from "../../atoms/Text/Text";
import { CountryJson } from "../../../types/talks";
import TalkTotalCard from "../../molecules/TalkTotalCard/TalkTotalCard";

const cx = classNames.bind(styles);

type Props = {
  countryJson: CountryJson[];
};

const WorldTalkList: React.FC<Props> = ({ countryJson }) => (
  <div className={cx("container")}>
    <div className={cx("title")}>
      <Text type="h2" color="lime" italic bold>
        World Talks
      </Text>
    </div>
    <div className={cx("worldTalkList")}>
      <div className={cx("head")}>
        <Text bold>Country</Text>
        <Text bold>Talks</Text>
      </div>
      <div className={cx("body")}>
        {countryJson.map((country: CountryJson) => {
          return <TalkTotalCard {...country} />;
        })}
      </div>
    </div>
  </div>
);

export default WorldTalkList;
