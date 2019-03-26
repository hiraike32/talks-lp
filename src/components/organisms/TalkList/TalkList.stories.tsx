import { storiesOf } from "@storybook/react";
import React from "react";
import TalkList from "./TalkList";
import { MemoryRouter } from "react-router";
import { getPagedTalkJson } from "../../../utils/getCityJson";

const story = storiesOf("organisms", module).addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("TalkList", () => (
  <TalkList title="Recent talks" pagedTalkJson={getPagedTalkJson()} />
));
