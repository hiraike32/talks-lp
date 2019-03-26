import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkCard.scss";
import { TalkJson } from "../../../types/talks";
import ColorCircle from "../../atoms/ColorCircle/ColorCircle";
import { Link } from "react-router-dom";
import Text from "../../atoms/Text/Text";

const cx = classNames.bind(styles);

const TalkCard: React.FC<TalkJson> = ({ title, event, date, location }) => (
  <div className={cx("container")}>
    <Link to={`talks/${location.country}/${date}`}>
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
