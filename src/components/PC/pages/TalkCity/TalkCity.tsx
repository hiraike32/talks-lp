import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { getCountryTalksJson } from "../../../../utils/getTalksJson";
import CityMap from "../../organisms/CityMap/CityMap";
import TalkList from "../../organisms/TalkList/TalkList";
import styles from "./TalkCity.scss";

const cx = classNames.bind(styles);

const TalkCity: React.FC<RouteComponentProps<{ country: string }>> = ({
  match,
  history,
}) => {
  const countryTalksJson = getCountryTalksJson(match.params.country);
  const [cityTalksJson, setCityTalksJson] = React.useState();

  return (
    <div className={cx("container")}>
      <div className={cx("map")}>
        <CityMap
          match={match}
          countryTalksJson={countryTalksJson}
          setCityTalksJson={setCityTalksJson}
        />
      </div>
      <div className={cx("list")}>
        <TalkList
          title={
            cityTalksJson
              ? cityTalksJson[0].location.city
              : match.params.country
          }
          goBack={history.goBack}
          talksJson={cityTalksJson ? cityTalksJson : countryTalksJson}
        />
      </div>
    </div>
  );
};

export default TalkCity;
