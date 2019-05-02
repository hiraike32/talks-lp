import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getTalkJson } from "../../../../utils/getTalksJson";
import LinkCard from "./LinkCard";

const story = storiesOf("molecules", module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));
const talkJson = getTalkJson("2019-03-12");

story.add("LinkCard", () => (
  <div style={{ width: "30rem" }}>
    <LinkCard
      type={select("type", ["photo", "slide", "video"], "photo")}
      href="/"
    />
  </div>
));
