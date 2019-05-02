import { storiesOf } from "@storybook/react";
import React from "react";
import TopMessage from "./TopMessage";

const story = storiesOf("sp/molecules", module);

story
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("TopMessage", () => <TopMessage />);
