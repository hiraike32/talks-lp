import talks from "../resource/talks.json";
import { CityJson, CountryJson, TalkJson } from "../types/talks.js";

export const getWorldTalksJson = (talks: TalkJson[]) => {
  const countryJson: CountryJson[] = [];
  talks.map((talk: TalkJson) => {
    let countryExists = false;
    countryJson.map((cj) => {
      if (cj.country === talk.location.country) {
        cj.total += 1;
        countryExists = true;
      }
    });
    if (!countryExists) {
      countryJson.push({
        country: talk.location.country,
        coordinates: [talk.location.longitude, talk.location.latitude],
        total: 1,
      });
    }
  });
  countryJson.sort(
    (a, b): number => {
      if (a.total < b.total) {
        return 1;
      } else if (a.total >= b.total) {
        return -1;
      } else {
        return 0;
      }
    },
  );
  return countryJson;
};

export const getCountryTalksJson = (country: string) => {
  const talksJson: TalkJson[] = [];
  talks.map((talk: TalkJson) => {
    if (talk.location.country === country) {
      talksJson.push(talk);
    }
  });
  return talksJson;
};

export const getCityTalksJson = (
  city: string,
  countryTalksJson: TalkJson[],
) => {
  const talksJson: TalkJson[] = [];
  countryTalksJson.map((talks: TalkJson) => {
    if (talks.location.city === city) {
      talksJson.push(talks);
    }
  });
  return talksJson;
};

export const getCityJson = (country: string) => {
  const cityJson: CityJson[] = [];
  talks.map((talk: TalkJson) => {
    if (talk.location.country === country) {
      let cityExists = false;
      cityJson.map((cj) => {
        if (cj.city === talk.location.city) {
          cj.total += 1;
          cityExists = true;
        }
      });
      if (!cityExists) {
        cityJson.push({
          city: talk.location.city,
          coordinates: [talk.location.longitude, talk.location.latitude],
          total: 1,
        });
      }
    }
  });
  return cityJson;
};

export const getTalkJson = (date: string) => {
  const talkJson: TalkJson[] = talks.filter((talk: TalkJson) => {
    if (talk.date === date) {
      return true;
    }
  });
  return talkJson[0];
};

export const getPagedTalksJson = (talks: TalkJson[]) => {
  const pagedTalkJson: TalkJson[][] = [];
  let talksJson: TalkJson[] = [];
  const pagedContent = 6;
  talks.map((talk: TalkJson) => {
    talksJson.push(talk);
    if (talksJson.length >= pagedContent) {
      pagedTalkJson.push(talksJson);
      talksJson = [];
    }
  });
  if (talksJson.length > 0) {
    pagedTalkJson.push(talksJson);
  }
  return pagedTalkJson;
};
