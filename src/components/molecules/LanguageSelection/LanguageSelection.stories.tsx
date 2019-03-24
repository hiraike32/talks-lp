import { storiesOf } from "@storybook/react";
import React from "react";
import LanguageSelection from "./LanguageSelection";
import { select, withKnobs } from "@storybook/addon-knobs";

const story = storiesOf("molecules", module);
story.addDecorator(withKnobs);

story.add("LanguageSelection", () => (
  <LanguageSelection language={select("language", ["en", "pt"], "en")} />
));
