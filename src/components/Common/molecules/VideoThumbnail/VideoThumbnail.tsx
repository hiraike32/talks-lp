import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import videoFixture from "../../../../image/videoFixture.jpg";
import styles from "./VideoThumbnail.scss";

const cx = classNames.bind(styles);
library.add(faPlayCircle);

interface Props {
  href: string;
}

const VideoThumbnail: React.FC<Props> = ({ href }) => (
  <a href={href} className={cx("link")} target="_blank">
    <div className={cx("container")}>
      <div className={cx("content")}>
        <FontAwesomeIcon icon={faPlayCircle} size="5x" className={cx("icon")} />
      </div>
      <img src={videoFixture} />
    </div>
  </a>
);

export default VideoThumbnail;
