import { storiesOf } from "@storybook/react";
import React from "react";
import Text from "./Text";
import { text, select, withKnobs, boolean } from "@storybook/addon-knobs";

const story = storiesOf("atoms", module);
story.addDecorator(withKnobs);

story.add("Text", () => (
  <Text
    to={text("to", "")}
    type={select("type", ["h1", "h2", "h3", "p"], "h1")}
    color={select("color", ["lime", "white"], "white")}
    bold={boolean("bold", false)}
    italic={boolean("italic", false)}
  >
    {text("text", "Erick Wendel")}
  </Text>
));
