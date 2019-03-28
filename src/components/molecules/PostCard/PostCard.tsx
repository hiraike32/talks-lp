import classNames from "classnames/bind";
import * as React from "react";
import { PostJson } from "../../../types/posts";
import Text from "../../atoms/Text/Text";
import styles from "./PostCard.scss";

const cx = classNames.bind(styles);

const PostCard: React.FC<PostJson> = ({ title, abstract, portal, date }) => (
  <div className={cx("container")}>
    <a href={portal.link} target="_blank">
      <div className={cx("head")}>
        <Text type="h3" bold={true}>
          {title}
        </Text>
      </div>
      <div className={cx("abstract")}>
        <Text>{abstract}</Text>
      </div>
      <div className={cx("bottom")}>
        <Text italic={true}>{portal.name}</Text>
        <Text italic={true}>{date}</Text>
      </div>
    </a>
  </div>
);

export default PostCard;
