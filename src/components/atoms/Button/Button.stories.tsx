import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./Button";
import { withKnobs, select } from "@storybook/addon-knobs";
import { MemoryRouter } from "react-router";

const story = storiesOf("atoms", module);
story
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("Button", () => (
  <div style={{ padding: "5rem" }}>
    <Button color={select("color", ["black", "lime"], "black")} to="/">
      Detail
    </Button>
  </div>
));
