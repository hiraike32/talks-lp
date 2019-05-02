import classNames from "classnames/bind";
import * as React from "react";
import Text from "../../../Common/atoms/Text/Text";
import styles from "./TopMessage.scss";

const cx = classNames.bind(styles);

const TopMessage: React.FC = () => (
  <div className={cx("container")}>
    <div className={cx("talks")}>
      <Text type="h2" light={true}>
        Erick Wendel
      </Text>
      <Text type="h2" bold={true} color="lime">
        Talks
      </Text>
    </div>
    <div className={cx("world")}>
      <Text type="h1" bold={true}>
        Let's dominate the world
      </Text>
    </div>
    <div className={cx("hashtag")}>
      <Text type="h2" italic={true}>
        #DaZLParaOMundo
      </Text>
    </div>
  </div>
);

export default TopMessage;
