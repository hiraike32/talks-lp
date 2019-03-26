import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Top.scss";
import topImage from "../../../image/top.jpg";
import TopMessage from "../../molecules/TopMessage/TopMessage";
import ColorBox from "../../atoms/ColorBox/ColorBox";
import TalkMap from "../TalkMap/TalkMap";
import WorldTalkList from "../../organisms/WorldTalkList/WorldTalkList";
import { getCountryJson, getPagedTalkJson } from "../../../utils/getCityJson";
import TalkList from "../../organisms/TalkList/TalkList";

const cx = classNames.bind(styles);

const Top: React.FC = () => {
  const countryJson = getCountryJson();

  return (
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
        <TalkMap countryJson={countryJson} />
      </div>
      <div className={cx("talkDetail")}>
        <div className={cx("worldList")}>
          <WorldTalkList countryJson={countryJson} />
        </div>
        <div className={cx("talkList")}>
          <TalkList title="Recent Talks" pagedTalkJson={getPagedTalkJson()} />
        </div>
      </div>
    </div>
  );
};

export default Top;
