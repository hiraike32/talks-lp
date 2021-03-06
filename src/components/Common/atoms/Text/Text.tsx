import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Text.scss";

const cx = classNames.bind(styles);

interface Props {
  to?: string;
  type?: "h1" | "h2" | "h3" | "p";
  color?: "lime" | "white" | "gray";
  italic?: boolean;
  bold?: boolean;
  light?: boolean;
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({
  to,
  type = "p",
  color = "white",
  italic,
  bold,
  light,
  children,
}) => (
  <span className={cx("text", color, type, { italic }, { bold }, { light })}>
    {children}
  </span>
);

export default Text;
