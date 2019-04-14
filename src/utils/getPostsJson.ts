import { PostJson } from "../types/posts.js";

export const getPagedPostJson = (postJson: PostJson[]) => {
  const pagedPostJson: PostJson[][] = [];
  let postsJson: PostJson[] = [];
  const pagedContent = 3;
  postJson.map((post: PostJson) => {
    postsJson.push(post);
    if (postsJson.length >= pagedContent) {
      pagedPostJson.push(postsJson);
      postsJson = [];
    }
  });
  if (postsJson.length > 0) {
    pagedPostJson.push(postsJson);
  }
  return pagedPostJson;
};
