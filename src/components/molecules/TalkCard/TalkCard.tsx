import classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import { TalkJson } from "../../../types/talks";
import ColorCircle from "../../atoms/ColorCircle/ColorCircle";
import Text from "../../atoms/Text/Text";
import styles from "./TalkCard.scss";

const cx = classNames.bind(styles);

const TalkCard: React.FC<TalkJson> = ({ title, event, date, location }) => (
  <div className={cx("container")}>
    <Link to={`../talks/${location.country}/${date}`} replace={true}>
      <div className={cx("head")}>
        <ColorCircle />
        <Text type="h3">{title}</Text>
      </div>
      <div className={cx("bottom")}>
        <Text>{event.name}</Text>
        <Text>{date}</Text>
      </div>
    </Link>
  </div>
);

export default TalkCard;
