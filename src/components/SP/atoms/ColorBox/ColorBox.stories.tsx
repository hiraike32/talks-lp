import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import ColorBox from "./ColorBox";

const story = storiesOf("atoms", module);
story.addDecorator(withKnobs);

story.add("colorBox", () => (
  <div style={{ padding: "5rem" }}>
    <ColorBox
      width={text("width", "10rem")}
      color={select("color", ["white", "lime"], "white")}
      bold={boolean("bold", false)}
    />
  </div>
));
