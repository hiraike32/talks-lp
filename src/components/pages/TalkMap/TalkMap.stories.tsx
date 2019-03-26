import { storiesOf } from "@storybook/react";
import React from "react";
import TalkMap from "./TalkMap";
import { getCountryJson } from "../../../utils/getCityJson";

const story = storiesOf("pages", module);

story.add("TalkMap", () => <TalkMap countryJson={getCountryJson()} />);
