import { select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Tag from "./Tag";

const story = storiesOf("atoms", module);
story
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("Tag", () => (
  <div style={{ padding: "5rem", width: "30rem" }}>
    <Tag>{text("tag", "node.js")}</Tag>
  </div>
));
