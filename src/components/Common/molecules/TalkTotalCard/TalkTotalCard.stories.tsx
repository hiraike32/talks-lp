import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getWorldTalksJson } from "../../../../utils/getTalksJson";
import talks from "../resource/talks.json";
import TalkTotalCard from "./TalkTotalCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const countryJson = getWorldTalksJson(talks);

story.add("TalkTotalCard", () => <TalkTotalCard {...countryJson[0]} />);
