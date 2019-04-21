import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";
import { Link as span } from "react-router-dom";
import talkJson from "../../../resource/talks.json";
import { TalkJson } from "../../../types/talks";
import { getPagedTalkJson } from "../../../utils/getTalksJson";
import Text from "../../atoms/Text/Text";
import Pager from "../../molecules/Pager/Pager";
import SearchBox from "../../molecules/SearchBox/SearchBox";
import TalkCard from "../../molecules/TalkCard/TalkCard";
import styles from "./Talk.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const Talk: React.FC<RouteComponentProps<{ page: string }>> = ({
  match,
  history,
}) => {
  const [talks, setTalks] = React.useState(getPagedTalkJson(talkJson));
  const [searchedTalks, setSearchedTalks] = React.useState(talkJson);
  const selectedPage: number = Number(match.params.page);

  React.useEffect(() => {
    setTalks(getPagedTalkJson(searchedTalks));
    history.replace("/talks/1");
  }, [searchedTalks]);

  return (
    <div className={cx("container")}>
      <div className={cx("head")}>
        <span onClick={history.goBack}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className={cx("arrow")}
          />
        </span>
        <Text color="lime" type="h2" bold={true} italic={true}>
          Talks
        </Text>
      </div>
      <div className={cx("searchBox")}>
        <SearchBox masterItems={talkJson} setItem={setSearchedTalks} />
      </div>
      <div className={cx("talkContent")}>
        {talks.length === 0 ? (
          <div className={cx("noTalk")}>
            <Text type="h1">Talks not found</Text>
          </div>
        ) : (
          <>
            <div className={cx("talks")}>
              {talks[selectedPage * 2 - 2].map((talk: TalkJson) => (
                <div className={cx("talk")}>
                  <TalkCard {...talk} />
                </div>
              ))}
            </div>
            <div className={cx("talks")}>
              {talks[selectedPage * 2 - 1] &&
                talks[selectedPage * 2 - 1].map((talk: TalkJson) => (
                  <div className={cx("talk")}>
                    <TalkCard {...talk} />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      <div className={cx("pager")}>
        <Pager
          allPage={Math.ceil(talks.length / 2)}
          selectedPage={selectedPage}
        />
      </div>
    </div>
  );
};

export default Talk;
