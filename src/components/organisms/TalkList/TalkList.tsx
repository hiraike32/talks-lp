import classNames from "classnames/bind";
import * as React from "react";
import { TalkJson } from "../../../types/talks";
import Button from "../../atoms/Button/Button";
import ColorCircle from "../../atoms/ColorCircle/ColorCircle";
import Text from "../../atoms/Text/Text";
import TalkCard from "../../molecules/TalkCard/TalkCard";
import styles from "./TalkList.scss";

const cx = classNames.bind(styles);

interface Props {
  title: string;
  pagedTalkJson: TalkJson[][];
}

const TalkList: React.FC<Props> = ({ title, pagedTalkJson }) => {
  const [page, setPage] = React.useState(0);

  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <Text type="h2" color="lime" italic={true} bold={true}>
          {title}
        </Text>
      </div>
      <div className={cx("TalkList")}>
        <div className={cx("head")}>
          <ColorCircle />
          <Text bold={true}>Past Talks</Text>
          <ColorCircle color="orange" />
          <Text bold={true}>Talks Future</Text>
        </div>
        <div className={cx("body")}>
          {pagedTalkJson[page].map((talk: TalkJson) => {
            return (
              <span key={talk.title}>
                <TalkCard {...talk} />
              </span>
            );
          })}
        </div>
      </div>
      <div className={cx("pager")}>
        {page > 0 ? (
          <Button onClick={() => setPage((page) => page - 1)}>
            <Text type="h3" color="lime">
              Prev
            </Text>
          </Button>
        ) : (
          <div className={cx("emptyButton")} />
        )}
        {pagedTalkJson.length - 1 > page ? (
          <Button onClick={() => setPage((page) => page + 1)}>
            <Text type="h3" color="lime">
              Next
            </Text>
          </Button>
        ) : (
          <div className={cx("emptyButton")} />
        )}
      </div>
    </div>
  );
};

export default TalkList;
