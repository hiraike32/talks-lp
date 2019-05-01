import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Pager from "./Pager";

const story = storiesOf("molecules", module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("Pager", () => (
  <Pager
    allPage={number("allPage", 10)}
    selectedPage={number("selectedPage", 1)}
  />
));
