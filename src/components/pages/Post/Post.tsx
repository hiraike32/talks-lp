import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { PostJson } from "../../../types/posts";
import { getPagedPostJson } from "../../../utils/getPostsJson";
import Text from "../../atoms/Text/Text";
import Pager from "../../molecules/Pager/Pager";
import PostCard from "../../molecules/PostCard/PostCard";
import styles from "./Post.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const Post: React.FC<RouteComponentProps<{ page: string }>> = ({
  match,
  history,
}) => {
  const [posts, setPosts] = React.useState(getPagedPostJson);
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
          Posts
        </Text>
      </div>
      <div className={cx("posts")}>
        <div className={cx("column")}>
          {posts[selectedPage - 1].map((post: PostJson) => (
            <PostCard {...post} />
          ))}
        </div>
        <div className={cx("column")}>
          {posts[selectedPage].map((post: PostJson) => (
            <PostCard {...post} />
          ))}
        </div>
      </div>
      <div className={cx("pager")}>
        <Pager
          allPage={Math.ceil(posts.length / 2)}
          selectedPage={selectedPage as number}
        />
      </div>
    </div>
  );
};

export default Post;
