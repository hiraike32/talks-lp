import classNames from "classnames/bind";
import * as React from "react";
import styles from "./ColorBox.scss";

const cx = classNames.bind(styles);

interface Props {
  color?: "white" | "lime";
  width: string;
  bold?: boolean;
}

const ColorBox: React.FC<Props> = ({ color = "white", width, bold }) => (
  <div
    className={cx("colorBox", color, { bold })}
    style={{ width }}
  />
);

export default ColorBox;
