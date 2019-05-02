import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";
import postJson from "../../../../resource/posts.json";
import { PostJson } from "../../../../types/posts";
import { getPagedPostJson } from "../../../../utils/getPostsJson";
import Text from "../../../Common/atoms/Text/Text";
import Pager from "../../molecules/Pager/Pager";
import PostCard from "../../molecules/PostCard/PostCard";
import SearchBox from "../../molecules/SearchBox/SearchBox";
import styles from "./Post.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const Post: React.FC<RouteComponentProps<{ page: string }>> = ({
  match,
  history,
}) => {
  const [posts, setPosts] = React.useState(getPagedPostJson(postJson));
  const [searchedPosts, setSearchedPosts] = React.useState(postJson);
  const selectedPage: number = Number(match.params.page);

  React.useEffect(() => {
    setPosts(getPagedPostJson(searchedPosts));
    history.replace("/posts/1");
  }, [searchedPosts]);

  return (
    <div className={cx("container")}>
      <div className={cx("head")}>
        <span onClick={history.goBack}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className={cx("arrow")}
          />
        </span>
        <Text color="lime" type="h2" bold={true} italic={true}>
          Posts
        </Text>
      </div>
      <div className={cx("searchBox")}>
        <SearchBox masterItems={postJson} setItem={setSearchedPosts} />
      </div>
      <div className={cx("postContent")}>
        {posts.length === 0 ? (
          <div className={cx("noPost")}>
            <Text type="h1">Posts not found</Text>
          </div>
        ) : (
          <>
            <div className={cx("posts")}>
              {posts[selectedPage * 2 - 2].map((post: PostJson) => (
                <div className={cx("post")}>
                  <PostCard {...post} />
                </div>
              ))}
            </div>
            <div className={cx("posts")}>
              {posts[selectedPage * 2 - 1] &&
                posts[selectedPage * 2 - 1].map((post: PostJson) => (
                  <div className={cx("post")}>
                    <PostCard {...post} />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      <div className={cx("pager")}>
        <Pager
          allPage={Math.ceil(posts.length / 2)}
          selectedPage={selectedPage}
        />
      </div>
    </div>
  );
};

export default withRouter(Post);
