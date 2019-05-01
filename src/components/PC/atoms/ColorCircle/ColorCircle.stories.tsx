import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import ColorCircle from "./ColorCircle";

const story = storiesOf("atoms", module);
story.addDecorator(withKnobs);

story.add("ColorCircle", () => (
  <div style={{ padding: "5rem" }}>
    <ColorCircle color={select("color", ["lime", "orange"], "lime")} />
  </div>
));
