import { storiesOf } from "@storybook/react";
import React from "react";
import TalkTotalCard from "./TalkTotalCard";
import { getCountryJson } from "../../../utils/getCityJson";
import { MemoryRouter } from "react-router";

const story = storiesOf("molecules", module).addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const countryJson = getCountryJson();

story.add("TalkTotalCard", () => <TalkTotalCard {...countryJson[0]} />);
