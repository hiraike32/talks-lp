import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { getCountryJson } from "../../../utils/getCityJson";
import TalkTotalCard from "./TalkTotalCard";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const countryJson = getCountryJson();

story.add("TalkTotalCard", () => <TalkTotalCard {...countryJson[0]} />);
