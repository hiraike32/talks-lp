export interface TalkJson {
  _id?: string;
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
}

export interface CountryJson {
  country: string;
  coordinates: [number, number];
  total: number;
}

export interface CityJson {
  city: string;
  coordinates: [number, number];
  total: number;
}

export interface AllTalksData {
  totalCount: number;
  talks: TalkJson[];
}
