import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import AboutLinkIcon, { Props } from "./AboutLinkIcon";

const story = storiesOf("molecules", module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ));

const types: Array<Props["type"]> = [
  "twitter",
  "facebook",
  "github",
  "linkedin",
  "medium",
  "email",
];

story.add("AboutLinkIcon", () => (
  <>
    {types.map((type) => {
      return (
        <span style={{ margin: "1rem" }} key={type}>
          <AboutLinkIcon type={type} href="/" />
        </span>
      );
    })}
  </>
));
