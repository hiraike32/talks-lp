import { storiesOf } from "@storybook/react";
import React from "react";
import MenuModal from "./MenuModal";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router";

const story = storiesOf("organisms", module);
story
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("MenuModal", () => (
  <MenuModal
    isMenuModal={boolean("isMenuModal", true)}
    setMenuModal={action("setMenuModal")}
  />
));
