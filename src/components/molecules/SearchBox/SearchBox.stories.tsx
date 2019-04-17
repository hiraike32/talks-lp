import { action } from "@storybook/addon-actions";
import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import postJson from "../../../resource/posts.json";
import SearchBox from "./SearchBox";

const story = storiesOf("molecules", module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

story.add("SearchBox", () => (
  <SearchBox masterItems={postJson} setItem={action("setItem")} />
));
