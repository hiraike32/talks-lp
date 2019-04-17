import classNames from "classnames/bind";
import * as React from "react";
import styles from "./ColorCircle.scss";

const cx = classNames.bind(styles);

interface Props {
  color?: "lime" | "orange";
}

const ColorCircle: React.FC<Props> = ({ color = "lime" }) => (
  <div className={cx("colorCircle", color)} />
);

export default ColorCircle;
