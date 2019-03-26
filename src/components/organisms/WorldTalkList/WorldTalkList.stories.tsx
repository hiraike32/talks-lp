import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getCountryJson } from "../../../utils/getCityJson";
import WorldTalkList from "./WorldTalkList";

const story = storiesOf("organisms", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const countryJson = getCountryJson();

story.add("WorldTalkList", () => <WorldTalkList countryJson={countryJson} />);
