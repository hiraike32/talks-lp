import { PostJson } from "../types/posts.js";

export const getPagedPostJson = (
  postJson: PostJson[],
  pagedContent: number,
) => {
  const pagedPostJson: PostJson[][] = [];
  let postsJson: PostJson[] = [];
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
