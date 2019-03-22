import talks from "../resource/talks.json";

type TalkJson = {
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

export type CityJson = {
  city: string;
  coordinates: [number, number];
  total: number;
};

export const getCityJson = () => {
  let cityJson: CityJson[] = [];
  talks.map((talk: TalkJson) => {
    let cityExists = false;
    cityJson.map(cj => {
      if (cj.city === talk.location.city) {
        cj.total += 1;
        cityExists = true;
      }
    });
    if (!cityExists) {
      cityJson.push({
        city: talk.location.city,
        coordinates: [talk.location.longitude, talk.location.latitude],
        total: 1
      });
    }
  });
  return cityJson;
};
