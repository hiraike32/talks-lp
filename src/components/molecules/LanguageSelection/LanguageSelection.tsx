import classNames from "classnames/bind";
import * as React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./LanguageSelection.scss";

const cx = classNames.bind(styles);

interface Props {
  language: "en" | "pt";
}

const LanguageSelection: React.FC<Props> = ({ language }) => (
  <div className={cx("container")}>
    <Text color={language === "en" ? "lime" : "gray"} bold={true}>
      EN
    </Text>
    <Text color={language === "pt" ? "lime" : "gray"} bold={true}>
      PT
    </Text>
  </div>
);

export default LanguageSelection;
