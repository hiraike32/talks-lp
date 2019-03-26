import talks from "../resource/talks.json";
import { CityJson, CountryJson, TalkJson } from "../types/talks.js";

export const getPagedTalkJson = () => {
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

export const getPagedCountryTalkJson = (country: string) => {
  const pagedTalkJson: TalkJson[][] = [];
  let talksJson: TalkJson[] = [];
  const pagedContent = 6;
  talks.map((talk: TalkJson) => {
    if (talk.location.country === country) {
      talksJson.push(talk);
    }
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

export const getPagedCityTalkJson = (
  city: string,
  pagedCountryTalkJson: TalkJson[][],
) => {
  const pagedTalkJson: TalkJson[][] = [];
  let talksJson: TalkJson[] = [];
  const pagedContent = 6;
  pagedCountryTalkJson.map((countryTalksJson: TalkJson[]) => {
    countryTalksJson.map((countryTalkJson: TalkJson) => {
      if (countryTalkJson.location.city === city) {
        talksJson.push(countryTalkJson);
      }
      if (talksJson.length >= pagedContent) {
        pagedTalkJson.push(talksJson);
        talksJson = [];
      }
    });
  });
  if (talksJson.length > 0) {
    pagedTalkJson.push(talksJson);
  }
  return pagedTalkJson;
};

export const getCountryJson = () => {
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
  return countryJson;
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

export const getTalkJson = (data: string) => {
  const talkJson: TalkJson[] = talks.filter((talk: TalkJson) => {
    if (talk.date === data) {
      return true;
    }
  });
  return talkJson[0];
};
