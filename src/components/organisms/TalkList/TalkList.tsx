import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { TalkJson } from "../../../types/talks";
import { getPagedTalksJson } from "../../../utils/getTalksJson";
import Button from "../../atoms/Button/Button";
import ColorCircle from "../../atoms/ColorCircle/ColorCircle";
import Text from "../../atoms/Text/Text";
import SearchBox from "../../molecules/SearchBox/SearchBox";
import TalkCard from "../../molecules/TalkCard/TalkCard";
import styles from "./TalkList.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

interface Props {
  title: React.ReactNode;
  goBack?: () => void;
  talksJson: TalkJson[];
}

const TalkList: React.FC<Props> = ({ title, goBack, talksJson }) => {
  const [page, setPage] = React.useState(0);
  const [talks, setTalks] = React.useState(getPagedTalksJson(talksJson));
  const [searchedTalks, setSearchedTalks] = React.useState(talksJson);

  const totalCount = talksJson.length;

  React.useEffect(() => {
    setTalks(getPagedTalksJson(searchedTalks));
    setPage(0);
  }, [searchedTalks]);

  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        {goBack && (
          <span onClick={goBack} className={cx("backButton")}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className={cx("arrow")}
            />
          </span>
        )}
        <Text type="h2" color="lime" italic={true} bold={true}>
          {title} ({totalCount})
        </Text>
      </div>
      <div className={cx("TalkList")}>
        <div className={cx("head")}>
          <div className={cx("searchBox")}>
            <SearchBox masterItems={talksJson} setItem={setSearchedTalks} />
          </div>
          <ColorCircle />
          <Text bold={true}>Past Talks</Text>
          <ColorCircle color="orange" />
          <Text bold={true}>Talks Future</Text>
        </div>
        <div className={cx("body")}>
          {talks[page].map((talk: TalkJson) => {
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
          <Button onClick={() => setPage(page => page - 1)}>
            <Text type="h3" color="lime">
              Prev
            </Text>
          </Button>
        ) : (
          <div className={cx("emptyButton")} />
        )}
        {talks.length - 1 > page ? (
          <Button onClick={() => setPage(page => page + 1)}>
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
