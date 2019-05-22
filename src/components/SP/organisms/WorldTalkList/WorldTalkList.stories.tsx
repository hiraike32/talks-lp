import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getWorldTalksJson } from "../../../../utils/getTalksJson";
import talks from "../resource/talks.json";
import WorldTalkList from "./WorldTalkList";

const story = storiesOf("organisms", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const countryJson = getWorldTalksJson(talks);

story.add("WorldTalkList", () => <WorldTalkList countryJson={countryJson} />);
