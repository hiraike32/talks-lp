import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileAlt,
  faImages,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import photo from "../../../../image/photoLink.jpg";
import slide from "../../../../image/slideLink.png";
import video from "../../../../image/videoLink.jpg";
import Text from "../../atoms/Text/Text";
import styles from "./LinkCard.scss";

const cx = classNames.bind(styles);
library.add(faImages, faFileAlt, faPlayCircle);

interface Props {
  type: "photo" | "slide" | "video";
  href: string;
}

const LinkCard: React.FC<Props> = ({ type, href }) => (
  <a href={href} className={cx("link")}>
    <div className={cx("container", type)}>
      {type === "photo" && (
        <>
          <div className={cx("content")}>
            <Text type="h2" color="lime">
              {type}
            </Text>
            <FontAwesomeIcon icon={faImages} size="3x" className={cx("icon")} />
          </div>
          <img src={photo} />
        </>
      )}
      {type === "slide" && (
        <>
          <div className={cx("content")}>
            <Text type="h2" color="lime">
              {type}
            </Text>
            <FontAwesomeIcon
              icon={faFileAlt}
              size="3x"
              className={cx("icon")}
            />
          </div>
          <img src={slide} />
        </>
      )}
      {type === "video" && (
        <>
          <div className={cx("content")}>
            <Text type="h2" color="lime">
              {type}
            </Text>
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="3x"
              className={cx("icon")}
            />
          </div>
          <img src={video} />
        </>
      )}
    </div>
  </a>
);

export default LinkCard;
