import { storiesOf } from "@storybook/react";
import React from "react";
import Header from "./Header";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router";

const story = storiesOf("organisms", module).addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("Header", () => <Header setMenuModal={action("setMenuModal")} />);
