import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Button from "./Button";

const story = storiesOf("atoms", module);
story
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("Button", () => (
  <div style={{ padding: "5rem" }}>
    <Button color={select("color", ["black", "lime"], "black")} to="/">
      Detail
    </Button>
  </div>
));
