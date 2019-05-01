import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { getTalkJson } from "../../../../utils/getTalksJson";
import Tag from "../../atoms/Tag/Tag";
import Text from "../../atoms/Text/Text";
import LinkCard from "../../molecules/LinkCard/LinkCard";
import styles from "./TalkDetail.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const TalkDetail: React.FC<RouteComponentProps<{ date: string }>> = ({
  match,
  history,
}) => {
  const [talk, setTalk] = React.useState(getTalkJson(match.params.date));

  return (
    <div className={cx("container")}>
      <div className={cx("leftColumn")}>
        <div className={cx("title")}>
          <span onClick={history.goBack} className={cx("backButton")}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className={cx("arrow")}
            />
          </span>
          <Text type="h2" bold={true} italic={true} color="lime">
            {talk.title}
          </Text>
        </div>
        <div className={cx("tag")}>
          {talk.tags.map((tag: string) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <div className={cx("detail")}>
          <Text>{talk.abstract}</Text>
        </div>
        <div className={cx("event")}>
          <div className={cx("eventTitle")}>
            <Text type="h2" color="lime">
              Event
            </Text>
          </div>
          <div className={cx("eventName")}>
            <Text type="h3" bold={true}>
              {talk.event.name}
            </Text>
          </div>
          <div className={cx("eventDetail")}>
            <Text>Date: {talk.date}</Text>
          </div>
          <div className={cx("eventDetail")}>
            <Text>
              Locale: {talk.location.city} {talk.location.country}
            </Text>
          </div>
          <div className={cx("eventDetail")}>
            <Text>
              Link: <a href={talk.event.link}>{talk.event.link}</a>
            </Text>
          </div>
        </div>
      </div>
      <div className={cx("rightColumn")}>
        {talk.photos && <LinkCard type="photo" href={talk.photos} />}
        {talk.slides && <LinkCard type="slide" href={talk.slides} />}
        {talk.video && <LinkCard type="video" href={talk.video} />}
      </div>
    </div>
  );
};

export default TalkDetail;
