import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getPagedVideoJson } from "../../../utils/getVideosJson";
import VideoCard from "./VideoCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const VideoJson = getPagedVideoJson();

story.add("VideoCard", () => <VideoCard {...VideoJson[0][0]} />);
