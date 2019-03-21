import { storiesOf } from "@storybook/react";
import React from "react";
import Map from "./Map";

const story = storiesOf("organisms", module);

story.add("Map", () => (
  <div style={{ width: "80vw", height: "80vh" }}>
    <Map />
  </div>
));
