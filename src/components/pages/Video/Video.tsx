import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { VideoJson } from "../../../types/videos";
import { getPagedVideoJson } from "../../../utils/getVideosJson";
import Text from "../../atoms/Text/Text";
import Pager from "../../molecules/Pager/Pager";
import VideoCard from "../../molecules/VideoCard/VideoCard";
import styles from "./Video.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const Video: React.FC<RouteComponentProps<{ page: string }>> = ({
  match,
  history,
}) => {
  const [Videos, setVideos] = React.useState(getPagedVideoJson);
  const selectedPage: number = Number(match.params.page);

  return (
    <div className={cx("container")}>
      <div className={cx("head")}>
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className={cx("arrow")}
          />
        </Link>
        <Text color="lime" type="h2" bold={true} italic={true}>
          Videos
        </Text>
      </div>
      <div className={cx("Videos")}>
        <div className={cx("column")}>
          {Videos[selectedPage - 1].map((Video: VideoJson) => (
            <VideoCard {...Video} />
          ))}
        </div>
        <div className={cx("column")}>
          {Videos[selectedPage].map((Video: VideoJson) => (
            <VideoCard {...Video} />
          ))}
        </div>
      </div>
      <div className={cx("pager")}>
        <Pager
          allPage={Math.ceil(Videos.length / 2)}
          selectedPage={selectedPage as number}
        />
      </div>
    </div>
  );
};

export default Video;
