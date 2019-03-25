import talks from "../resource/talks.json";
import { CountryJson, TalkJson, CityJson } from "../types/talks.js";

export const getCountryJson = () => {
  let countryJson: CountryJson[] = [];
  talks.map((talk: TalkJson) => {
    let countryExists = false;
    countryJson.map(cj => {
      if (cj.country === talk.location.country) {
        cj.total += 1;
        countryExists = true;
      }
    });
    if (!countryExists) {
      countryJson.push({
        country: talk.location.country,
        coordinates: [talk.location.longitude, talk.location.latitude],
        total: 1
      });
    }
  });
  return countryJson;
};

export const getCityJson = (country: string) => {
  let cityJson: CityJson[] = [];
  talks.map((talk: TalkJson) => {
    if (talk.location.country === country) {
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
    }
  });
  return cityJson;
};
