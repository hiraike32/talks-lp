import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Top.scss";
import Header from "../../organisms/Header/Header";
import topImage from "../../../image/top.jpg";
import TopMessage from "../../molecules/TopMessage/TopMessage";
import ColorBox from "../../atoms/ColorBox/ColorBox";
import TalkMap from "../TalkMap/TalkMap";

const cx = classNames.bind(styles);

const Top: React.FC = () => (
  <div className={cx("container")}>
    <div className={cx("top")}>
      <div className={cx("topImage")}>
        <img src={topImage} />
      </div>
      <div className={cx("topMessage")}>
        <TopMessage />
      </div>
      <div className={cx("bar")}>
        <ColorBox width="30vw" color="lime" bold />
      </div>
    </div>
    <div className={cx("talkmap")}>
      <TalkMap />
    </div>
  </div>
);

export default Top;
