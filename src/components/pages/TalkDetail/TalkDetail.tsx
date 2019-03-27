import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { getTalkJson } from "../../../utils/getCityJson";
import Tag from "../../atoms/Tag/Tag";
import Text from "../../atoms/Text/Text";
import styles from "./TalkDetail.scss";

const cx = classNames.bind(styles);

const TalkDetail: React.FC<RouteComponentProps<{ date: string }>> = ({
  match,
}) => {
  const [talk, setTalk] = React.useState(getTalkJson(match.params.date));

  return (
    <div className={cx("container")}>
      <div className={cx("column")}>
        <div className={cx("title")}>
          <Text type="h2" bold={true} italic={true} color="lime">
            {talk.title}
          </Text>
        </div>
        <div className={cx("tag")}>
          {talk.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <div className={cx("detail")}>{talk.abstract}</div>
        <div className={cx("event")}>
          <div className={cx("eventTitle")}>
            <Text type="h2" color="lime">
              Event
            </Text>
          </div>
          <div className={cx("eventName")}>
            <Text type="h3">{talk.event.name}</Text>
          </div>
          <div className={cx("eventDate")}>
            <Text>Date: {talk.date}</Text>
          </div>
          <div className={cx("eventLocale")}>
            <Text>
              Locale: {talk.location.city} {talk.location.country}
            </Text>
          </div>
          <div className={cx("eventLink")}>
            <Text>
              Link: <a href={talk.event.link}>{talk.location.city}</a>
            </Text>
          </div>
        </div>
      </div>
      <div className={cx("column")}>aaa</div>
    </div>
  );
};

export default TalkDetail;
