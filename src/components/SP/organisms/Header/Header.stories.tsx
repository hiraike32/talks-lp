import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

const story = storiesOf("sp/organisms", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Header", () => <Header setMenuModal={action("setMenuModal")} />);
