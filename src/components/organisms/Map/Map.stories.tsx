import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getCountryJson } from "../../../utils/getTalksJson";
import Map from "./Map";

const story = storiesOf("organisms", module);
story.addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("Map", () => <Map countryJson={getCountryJson()} />);
