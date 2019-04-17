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
import ScrollToTop from "../../organisms/ScrollTop/ScrollTop";
import styles from "./Video.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const Video: React.FC<RouteComponentProps<{ page: string }>> = ({
  match,
  history,
}) => {
  const [videos, setVideos] = React.useState(getPagedVideoJson);
  const selectedPage: number = Number(match.params.page);

  return (
    <div className={cx("container")}>
      <ScrollToTop />
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
        {videos[selectedPage - 1].map((video: VideoJson) => {
          return (
            <span key={video.date}>
              <VideoCard {...video} />
            </span>
          );
        })}
      </div>
      <div className={cx("pager")}>
        <Pager allPage={videos.length} selectedPage={selectedPage} />
      </div>
    </div>
  );
};

export default Video;
