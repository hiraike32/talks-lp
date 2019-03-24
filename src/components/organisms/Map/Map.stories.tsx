import { storiesOf } from "@storybook/react";
import React from "react";
import Map from "./Map";
import { MemoryRouter } from "react-router";

const story = storiesOf("organisms", module);
story.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("Map", () => <Map />);
