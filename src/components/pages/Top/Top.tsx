import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Top.scss";
import Header from "../../organisms/Header/Header";
import topImage from "../../../image/top.jpg";
import TopMessage from "../../molecules/TopMessage/TopMessage";

const cx = classNames.bind(styles);

const Top: React.FC = () => (
  <div className={cx("container")}>
    <Header />
    <div className={cx("topImage")}>
      <img src={topImage} />
    </div>
    <div className={cx("topMessage")}>
      <TopMessage />
    </div>
  </div>
);

export default Top;
