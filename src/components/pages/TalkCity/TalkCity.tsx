import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { getPagedCountryTalkJson } from "../../../utils/getTalksJson";
import CityMap from "../../organisms/CityMap/CityMap";
import TalkList from "../../organisms/TalkList/TalkList";
import styles from "./TalkCity.scss";

const cx = classNames.bind(styles);

const TalkCity: React.FC<RouteComponentProps<{ country: string }>> = ({
  match,
  history,
}) => {
  const [pagedTalkJson, setPagedTalkJson] = React.useState(
    getPagedCountryTalkJson(match.params.country),
  );
  const [pagedCityTalkJson, setPagedCityTalkJson] = React.useState();

  return (
    <div className={cx("container")}>
      <div className={cx("map")}>
        <CityMap
          match={match}
          pagedTalkJson={pagedTalkJson}
          setPagedCityTalkJson={setPagedCityTalkJson}
        />
      </div>
      <div className={cx("list")}>
        <TalkList
          title={
            pagedCityTalkJson
              ? pagedCityTalkJson[0][0].location.city
              : match.params.country
          }
          goBack={history.goBack}
          pagedTalkJson={pagedCityTalkJson ? pagedCityTalkJson : pagedTalkJson}
        />
      </div>
    </div>
  );
};

export default TalkCity;
