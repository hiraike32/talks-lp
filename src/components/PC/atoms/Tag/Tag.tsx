import classNames from "classnames/bind";
import * as React from "react";
import Text from "../Text/Text";
import styles from "./Tag.scss";

const cx = classNames.bind(styles);

const Tag: React.FC = ({ children }) => (
  <span className={cx("tag")}>
    <Text color="lime">{children}</Text>
  </span>
);

export default Tag;
