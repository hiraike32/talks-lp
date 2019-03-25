export type TalkJson = {
  title: string;
  abstract: string;
  type: string;
  event: {
    link: string;
    name: string;
  };
  slides: string;
  photos: string;
  video: string;
  tags: string[];
  location: {
    latitude: number;
    longitude: number;
    country: string;
    uf: string;
    city: string;
  };
  additionalLinks: string[];
  language: string;
  date: string;
};

export type CountryJson = {
  country: string;
  coordinates: [number, number];
  total: number;
};

export type CityJson = {
  city: string;
  coordinates: [number, number];
  total: number;
};
