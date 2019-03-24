import classNames from "classnames/bind";
import * as React from "react";
import styles from "./LanguageSelection.scss";
import Text from "../../atoms/Text/Text";

const cx = classNames.bind(styles);

type Props = {
  language: "en" | "pt";
};

const LanguageSelection: React.FC<Props> = ({ language }) => (
  <div className={cx("container")}>
    <Text color={language === "en" ? "lime" : "gray"} bold>
      EN
    </Text>
    <Text color={language === "pt" ? "lime" : "gray"} bold>
      PT
    </Text>
  </div>
);

export default LanguageSelection;
