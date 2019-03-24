import { storiesOf } from "@storybook/react";
import React from "react";
import MenuModal from "./MenuModal";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const story = storiesOf("organisms", module);
story.addDecorator(withKnobs);

story.add("MenuModal", () => (
  <MenuModal
    isMenuModal={boolean("isMenuModal", true)}
    setMenuModal={action("setMenuModal")}
  />
));
