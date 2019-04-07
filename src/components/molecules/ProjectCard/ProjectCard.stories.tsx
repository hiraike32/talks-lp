import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getPagedProjectJson } from "../../../utils/getProjectsJson";
import ProjectCard from "./ProjectCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const postJson = getPagedProjectJson();

story.add("ProjectCard", () => <ProjectCard {...postJson[0]} />);
