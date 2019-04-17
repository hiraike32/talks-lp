import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getTalkJson } from "../../../utils/getTalksJson";
import TalkCard from "./TalkCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const talkJson = getTalkJson("2019-03-12");

story.add("TalkCard", () => <TalkCard {...talkJson} />);
