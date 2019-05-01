import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import VideoThumbnail from "./VideoThumbnail";

const story = storiesOf("molecules", module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("VideoThumbnail", () => (
  <div style={{ width: "30rem" }}>
    <VideoThumbnail href="/" />
  </div>
));
