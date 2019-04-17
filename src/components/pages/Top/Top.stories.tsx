import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Top from "./Top";

const story = storiesOf("pages", module);
story.addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("Top", () => <Top />);
