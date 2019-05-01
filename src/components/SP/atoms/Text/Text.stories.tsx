import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Text from "./Text";

const story = storiesOf("atoms", module);
story.addDecorator(withKnobs);

story.add("Text", () => (
  <Text
    to={text("to", "")}
    type={select("type", ["h1", "h2", "h3", "p"], "h1")}
    color={select("color", ["lime", "white", "gray"], "white")}
    bold={boolean("bold", false)}
    light={boolean("light", false)}
    italic={boolean("italic", false)}
  >
    {text("text", "Erick Wendel")}
  </Text>
));
