import classNames from "classnames/bind";
import * as React from "react";
import topImage from "../../../image/top.jpg";
import talkJson from "../../../resource/talks.json";
import { getCountryJson, getPagedTalkJson } from "../../../utils/getTalksJson";
import ColorBox from "../../atoms/ColorBox/ColorBox";
import TopMessage from "../../molecules/TopMessage/TopMessage";
import TalkList from "../../organisms/TalkList/TalkList";
import WorldTalkList from "../../organisms/WorldTalkList/WorldTalkList";
import TalkMap from "../TalkMap/TalkMap";
import styles from "./Top.scss";

const cx = classNames.bind(styles);

const Top: React.FC = () => {
  const [countryJson, setCountryJson] = React.useState(getCountryJson());

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
          <ColorBox width="30vw" color="lime" bold={true} />
        </div>
      </div>
      <div className={cx("talkmap")}>
        <TalkMap />
      </div>
      <div className={cx("talkDetail")}>
        <div className={cx("worldList")}>
          <WorldTalkList countryJson={countryJson} />
        </div>
        <div className={cx("talkList")}>
          <TalkList
            title="Recent Talks"
            pagedTalkJson={getPagedTalkJson(talkJson)}
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
