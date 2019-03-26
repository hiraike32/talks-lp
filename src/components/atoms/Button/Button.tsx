import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Button.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
  color?: "black" | "lime";
  to: string;
};

const Button: React.FC<Props> = ({ color = "black", to, children }) => (
  <Link to={to}>
    <button className={cx("button", color)}>{children}</button>
  </Link>
);

export default Button;
