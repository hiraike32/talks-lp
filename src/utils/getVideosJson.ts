import videos from "../resource/videos.json";
import { VideoJson } from "../types/videos.js";

export const getPagedVideoJson = () => {
  const pagedVideoJson: VideoJson[][] = [];
  let videosJson: VideoJson[] = [];
  const pagedContent = 4;
  videos.map((video: VideoJson) => {
    videosJson.push(video);
    if (videosJson.length >= pagedContent) {
      pagedVideoJson.push(videosJson);
      videosJson = [];
    }
  });
  if (videosJson.length > 0) {
    pagedVideoJson.push(videosJson);
  }
  return pagedVideoJson;
};
