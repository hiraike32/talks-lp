import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TopMessage.scss";
import Text from "../../atoms/Text/Text";
import ColorBox from "../../atoms/ColorBox/ColorBox";
import LanguageSelection from "../LanguageSelection/LanguageSelection";

const cx = classNames.bind(styles);

const TopMessage: React.FC = () => (
  <div className={cx("container")}>
    <div className={cx("talks")}>
      <Text type="h2" light>
        Erick Wendel
      </Text>
      <Text type="h2" bold color="lime">
        Talks
      </Text>
    </div>
    <div className={cx("world")}>
      <Text type="h1" bold>
        Let's dominate the world
      </Text>
    </div>
    <div className={cx("hashtag")}>
      <Text type="h2" italic>
        #DaZLParaOMundo
      </Text>
    </div>
    <div className={cx("border")}>
      <ColorBox width="5rem" color="lime" bold />
    </div>
    <div className={cx("language")}>
      <LanguageSelection language="en" />
    </div>
  </div>
);

export default TopMessage;
