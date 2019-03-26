import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Button.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
  color?: "black" | "lime";
  to?: string;
  onClick?: any;
};

const Button: React.FC<Props> = ({
  color = "black",
  to,
  children,
  onClick
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
