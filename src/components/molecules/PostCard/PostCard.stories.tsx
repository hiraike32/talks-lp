import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getPagedPostJson } from "../../../utils/getPostsJson";
import PostCard from "./PostCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const postJson = getPagedPostJson();

story.add("PostCard", () => <PostCard {...postJson[0][0]} />);
