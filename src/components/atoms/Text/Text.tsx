import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Text.scss";

const cx = classNames.bind(styles);

type Props = {
  to?: string;
  type?: "h1" | "h2" | "h3" | "p";
  color?: "lime" | "white";
  italic?: boolean;
  bold?: boolean;
  children: React.ReactNode;
};

const Text: React.FC<Props> = ({
  to,
  type = "p",
  color = "white",
  italic,
  bold,
  children
}) => (
  <span className={cx(color, type, { italic: italic }, { bold: bold })}>
    {children}
  </span>
);

export default Text;
