import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkCity.scss";
import CityMap from "../../organisms/CityMap/CityMap";

const cx = classNames.bind(styles);

type Props = {
  match: any;
};

const TalkCity: React.FC<Props> = ({ match }) => (
  <div className={cx("container")}>
    <div className={cx("map")}>
      <CityMap match={match} />
    </div>
  </div>
);

export default TalkCity;
