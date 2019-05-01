import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import topImage from "../../../image/top.jpg";
import talkJson from "../../../resource/talks.json";
import {
  getPagedTalksJson,
  getWorldTalksJson,
} from "../../../utils/getTalksJson";
import ColorBox from "../../atoms/ColorBox/ColorBox";
import TopMessage from "../../molecules/TopMessage/TopMessage";
import TalkList from "../../organisms/TalkList/TalkList";
import WorldTalkList from "../../organisms/WorldTalkList/WorldTalkList";
import TalkMap from "../TalkMap/TalkMap";
import styles from "./Top.scss";

const cx = classNames.bind(styles);

library.add(faAngleDoubleDown);

const Top: React.FC<RouteComponentProps> = ({ history }) => {
  const [countryJson, setCountryJson] = React.useState(getWorldTalksJson());

  return (
    <div className={cx("container")}>
      <div className={cx("top")}>
        <div className={cx("topImage")}>
          <img src={topImage} />
        </div>
        <div className={cx("topMessage")}>
          <TopMessage />
        </div>
        <div className={cx("scrollIcon")}>
          <FontAwesomeIcon icon={faAngleDoubleDown} size="4x" />
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
          <TalkList title="Recent Talks" talksJson={talkJson} />
        </div>
      </div>
    </div>
  );
};

export default Top;
