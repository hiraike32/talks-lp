import classNames from "classnames/bind";
import * as React from "react";
import { CountryJson } from "../../../../types/talks";
import Text from "../../atoms/Text/Text";
import TalkTotalCard from "../../molecules/TalkTotalCard/TalkTotalCard";
import styles from "./WorldTalkList.scss";

const cx = classNames.bind(styles);

interface Props {
  countryJson: CountryJson[];
}

const WorldTalkList: React.FC<Props> = ({ countryJson }) => (
  <div className={cx("container")}>
    <div className={cx("title")}>
      <Text type="h2" color="lime" italic={true} bold={true}>
        World Talks
      </Text>
    </div>
    <div className={cx("worldTalkList")}>
      <div className={cx("head")}>
        <Text bold={true} type="h3">
          Country
        </Text>
        <Text bold={true} type="h3">
          Talks
        </Text>
      </div>
      <div className={cx("body")}>
        {countryJson.map((country: CountryJson) => {
          return (
            <span key={country.country}>
              <TalkTotalCard {...country} />
            </span>
          );
        })}
      </div>
    </div>
  </div>
);

export default WorldTalkList;
