import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import postJson from "../../../../resource/posts.json";
import PostCard from "./PostCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

story.add("PostCard", () => <PostCard {...postJson[0]} />);
