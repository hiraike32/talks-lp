import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkList.scss";
import Text from "../../atoms/Text/Text";
import { TalkJson } from "../../../types/talks";
import Button from "../../atoms/Button/Button";
import ColorCircle from "../../atoms/ColorCircle/ColorCircle";
import TalkCard from "../../molecules/TalkCard/TalkCard";

const cx = classNames.bind(styles);

type Props = {
  title: string;
  pagedTalkJson: TalkJson[][];
};

const TalkList: React.FC<Props> = ({ title, pagedTalkJson }) => {
  const [page, setPage] = React.useState(0);

  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <Text type="h2" color="lime" italic bold>
          {title}
        </Text>
      </div>
      <div className={cx("TalkList")}>
        <div className={cx("head")}>
          <ColorCircle />
          <Text bold>Country</Text>
          <ColorCircle color="orange" />
          <Text bold>Talks</Text>
        </div>
        <div className={cx("body")}>
          {pagedTalkJson[page].map((talk: TalkJson) => {
            return <TalkCard {...talk} />;
          })}
        </div>
      </div>
      <div className={cx("pager")}>
        {page > 0 ? (
          <Button onClick={() => setPage(page => page - 1)}>Prev</Button>
        ) : (
          <div className={cx("emptyButton")} />
        )}
        {pagedTalkJson.length - 1 > page ? (
          <Button onClick={() => setPage(page => page + 1)}>Next</Button>
        ) : (
          <div className={cx("emptyButton")} />
        )}
      </div>
    </div>
  );
};

export default TalkList;
