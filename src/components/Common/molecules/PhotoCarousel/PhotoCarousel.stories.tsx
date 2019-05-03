import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import photoCarousel1 from "../../../../image/photoCarousel1.jpg";
import photoCarousel2 from "../../../../image/photoCarousel2.jpg";
import photoCarousel3 from "../../../../image/photoCarousel3.jpg";
import photoCarousel4 from "../../../../image/photoCarousel4.jpg";
import photoCarousel5 from "../../../../image/photoCarousel5.jpg";
import photoCarousel6 from "../../../../image/photoCarousel6.jpg";
import photoCarousel7 from "../../../../image/photoCarousel7.jpg";
import PhotoCarousel, { PhotoCarouselProps } from "./PhotoCarousel";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

const photos: PhotoCarouselProps[] = [
  { image: photoCarousel1 },
  { image: photoCarousel2 },
  { image: photoCarousel3 },
  { image: photoCarousel4 },
  { image: photoCarousel5 },
  { image: photoCarousel6 },
  { image: photoCarousel7 },
];

story.add("PhotoCarousel", () => (
  <div style={{ width: "50vw" }}>
    <PhotoCarousel />
  </div>
));
