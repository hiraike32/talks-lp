import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkCity.scss";
import CityMap from "../../organisms/CityMap/CityMap";
import TalkList from "../../organisms/TalkList/TalkList";
import { getPagedCityTalkJson } from "../../../utils/getCityJson";
import { RouteComponentProps } from "react-router";

const cx = classNames.bind(styles);

const TalkCity: React.FC<RouteComponentProps<{ country: string }>> = ({
  match
}) => {
  const [pagedCityTalkJson, setPagedCityTalkJson] = React.useState(
    getPagedCityTalkJson(match.params.country)
  );

  return (
    <div className={cx("container")}>
      <div className={cx("map")}>
        <CityMap match={match} />
      </div>
      <div className={cx("list")}>
        <TalkList
          title={match.params.country}
          pagedTalkJson={pagedCityTalkJson}
        />
      </div>
    </div>
  );
};

export default TalkCity;
