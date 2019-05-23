import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";
import topImage from "../../../../image/top.jpg";
import { getWorldTalksJson } from "../../../../utils/getTalksJson";
import { getAllTalksQueryForList } from "../../../../utils/getTalksQuery";
import ColorBox from "../../../Common/atoms/ColorBox/ColorBox";
import TopMessage from "../../../Common/molecules/TopMessage/TopMessage";
import TalkList from "../../organisms/TalkList/TalkList";
import WorldTalkList from "../../organisms/WorldTalkList/WorldTalkList";
import TalkMap from "../TalkMap/TalkMap";
import styles from "./Top.scss";

const cx = classNames.bind(styles);

library.add(faAngleDoubleDown);

const Top: React.FC = () => {
  const { data, loading } = useQuery(getAllTalksQueryForList());

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
          {!loading && (
            <WorldTalkList
              countryJson={getWorldTalksJson(data.getTalks.talks)}
            />
          )}
        </div>
        <div className={cx("talkList")}>
          {!loading && (
            <TalkList title="Recent Talks" talksJson={data.getTalks.talks} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Top;
