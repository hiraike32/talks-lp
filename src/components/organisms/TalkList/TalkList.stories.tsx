import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import talkJson from "../../../resource/talks.json";
import { getPagedTalkJson } from "../../../utils/getTalksJson";
import TalkList from "./TalkList";

const story = storiesOf("organisms", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("TalkList", () => (
  <TalkList title="Recent talks" pagedTalkJson={getPagedTalkJson(talkJson)} />
));
