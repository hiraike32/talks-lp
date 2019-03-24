import { storiesOf } from "@storybook/react";
import React from "react";
import Header from "./Header";
import { action } from "@storybook/addon-actions";

const story = storiesOf("organisms", module);

story.add("Header", () => <Header setMenuModal={action("setMenuModal")} />);
