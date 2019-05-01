import classNames from "classnames/bind";
import * as React from "react";
import { VideoJson } from "../../../../types/videos";
import Tag from "../../atoms/Tag/Tag";
import Text from "../../atoms/Text/Text";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import styles from "./VideoCard.scss";

const cx = classNames.bind(styles);

const VideoCard: React.FC<VideoJson> = ({
  title,
  abstract,
  tags,
  link,
  date,
}) => (
  <div className={cx("container")}>
    <div className={cx("thumbnail")}>
      <VideoThumbnail href={link} />
    </div>
    <div className={cx("content")}>
      <div className={cx("head")}>
        <Text type="h3" bold={true}>
          {title}
        </Text>
      </div>
      <div className={cx("tag")}>
        {tags.map((tag: string, index: number) => {
          return <Tag key={`${tag}${index}`}>{tag}</Tag>;
        })}
      </div>
      <div className={cx("abstract")}>
        <Text>{abstract}</Text>
      </div>
      <div className={cx("bottom")}>
        <Text italic={true}>{date}</Text>
      </div>
    </div>
  </div>
);

export default VideoCard;
