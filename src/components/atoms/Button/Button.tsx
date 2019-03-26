import classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.scss";

const cx = classNames.bind(styles);

interface Props {
  color?: "black" | "lime";
  to?: string;
  onClick?: any;
}

const Button: React.FC<Props> = ({
  color = "black",
  to,
  children,
  onClick,
}) => (
  <>
    {to ? (
      <Link to={to} className={cx("link")}>
        <button className={cx("button", color)}>{children}</button>
      </Link>
    ) : (
      <button className={cx("button", color)} onClick={onClick}>
        {children}
      </button>
    )}
  </>
);

export default Button;
