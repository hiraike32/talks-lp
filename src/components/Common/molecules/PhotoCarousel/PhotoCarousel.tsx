import classNames from "classnames/bind";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./PhotoCarousel.scss";

const cx = classNames.bind(styles);

export interface PhotoCarouselProps {
  image: string;
  name?: string;
}

const PhotoCarousel: React.FC<{ photos: PhotoCarouselProps[] }> = ({
  photos,
}) => {
  return (
    <Carousel>
      {photos.map((photo) => {
        return (
          <div key={photo.image} className={cx("photo")}>
            <img src={photo.image} />
            {photo.name && <p>{photo.name}</p>}
          </div>
        );
      })}
    </Carousel>
  );
};

export default PhotoCarousel;
