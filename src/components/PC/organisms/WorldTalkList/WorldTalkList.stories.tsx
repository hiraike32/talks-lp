import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getWorldTalksJson } from "../../../../utils/getTalksJson";
import WorldTalkList from "./WorldTalkList";

const story = storiesOf("organisms", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const countryJson = getWorldTalksJson();

story.add("WorldTalkList", () => <WorldTalkList countryJson={countryJson} />);
