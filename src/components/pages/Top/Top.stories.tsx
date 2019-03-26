import { storiesOf } from "@storybook/react";
import React from "react";
import Top from "./Top";
import { MemoryRouter } from "react-router";

const story = storiesOf("pages", module);
story.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("Top", () => <Top />);
