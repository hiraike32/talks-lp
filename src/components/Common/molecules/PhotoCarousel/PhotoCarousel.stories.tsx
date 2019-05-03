import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import photoCarousel1 from "../../../../image/__fixtures__/photoCarousel1.jpg";
import photoCarousel2 from "../../../../image/__fixtures__/photoCarousel2.jpg";
import photoCarousel3 from "../../../../image/__fixtures__/photoCarousel3.jpg";
import photoCarousel4 from "../../../../image/__fixtures__/photoCarousel4.jpg";
import photoCarousel5 from "../../../../image/__fixtures__/photoCarousel5.jpg";
import photoCarousel6 from "../../../../image/__fixtures__/photoCarousel6.jpg";
import photoCarousel7 from "../../../../image/__fixtures__/photoCarousel7.jpg";
import PhotoCarousel, { PhotoCarouselProps } from "./PhotoCarousel";

const story = storiesOf("molecules", module).addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

const photos: PhotoCarouselProps[] = [
  { image: photoCarousel1, name: "photoCarousel1" },
  { image: photoCarousel2, name: "photoCarousel2" },
  { image: photoCarousel3, name: "photoCarousel3" },
  { image: photoCarousel4, name: "photoCarousel4" },
  { image: photoCarousel5, name: "photoCarousel5" },
  { image: photoCarousel6, name: "photoCarousel6" },
  { image: photoCarousel7, name: "photoCarousel7" },
];

story.add("PhotoCarousel", () => <PhotoCarousel photos={photos} />);
