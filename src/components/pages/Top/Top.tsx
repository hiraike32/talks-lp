import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Top.scss";
import Header from "../../organisms/Header/Header";
import topImage from "../../../image/top.jpg";
import TopMessage from "../../molecules/TopMessage/TopMessage";
import ColorBox from "../../atoms/ColorBox/ColorBox";

const cx = classNames.bind(styles);

const Top: React.FC = () => (
  <div className={cx("container")}>
    <div className={cx("top")}>
      <Header />
      <div className={cx("topImage")}>
        <img src={topImage} />
      </div>
      <div className={cx("topMessage")}>
        <TopMessage />
      </div>
      <div className={cx("bar")}>
        <ColorBox width="20rem" color="lime" bold />
      </div>
    </div>
  </div>
);

export default Top;
