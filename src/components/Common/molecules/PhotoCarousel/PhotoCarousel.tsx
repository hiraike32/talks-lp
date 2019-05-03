import Carousel from "nuka-carousel";
import React from "react";
import photoCarousel1 from "../../../../image/photoCarousel1.jpg";
import photoCarousel2 from "../../../../image/photoCarousel2.jpg";
import photoCarousel3 from "../../../../image/photoCarousel3.jpg";
import photoCarousel4 from "../../../../image/photoCarousel4.jpg";
import photoCarousel5 from "../../../../image/photoCarousel5.jpg";
import photoCarousel6 from "../../../../image/photoCarousel6.jpg";
import photoCarousel7 from "../../../../image/photoCarousel7.jpg";
export interface PhotoCarouselProps {
  image: string;
}

const photosFixture: PhotoCarouselProps[] = [
  { image: photoCarousel1 },
  { image: photoCarousel2 },
  { image: photoCarousel3 },
  { image: photoCarousel4 },
  { image: photoCarousel5 },
  { image: photoCarousel6 },
  { image: photoCarousel7 },
];

const PhotoCarousel: React.FC = () => {
  return (
    <Carousel>
      {photosFixture.map((photo) => {
        return <img src={photo.image} key={photo.image} />;
      })}
    </Carousel>
  );
};

export default PhotoCarousel;
