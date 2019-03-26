import { storiesOf } from "@storybook/react";
import React from "react";
import TalkCard from "./TalkCard";
import { getTalkJson } from "../../../utils/getCityJson";
import { MemoryRouter } from "react-router";

const story = storiesOf("molecules", module).addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const talkJson = getTalkJson("2019-03-12");

story.add("TalkCard", () => <TalkCard {...talkJson} />);
