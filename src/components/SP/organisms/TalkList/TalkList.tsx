import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { TalkJson } from "../../../../types/talks";
import { getPagedTalksJson } from "../../../../utils/getTalksJson";
import ColorCircle from "../../../Common/atoms/ColorCircle/ColorCircle";
import Text from "../../../Common/atoms/Text/Text";
import Pager from "../../../Common/molecules/Pager/Pager";
import SearchBox from "../../../Common/molecules/SearchBox/SearchBox";
import TalkCard from "../../../Common/molecules/TalkCard/TalkCard";
import styles from "./TalkList.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

interface Props {
  title: React.ReactNode;
  goBack?: () => void;
  talksJson: TalkJson[];
}

const TalkList: React.FC<Props> = ({ title, goBack, talksJson }) => {
  const [selectedPage, setSelectedPage] = React.useState<number>(1);
  const [talks, setTalks] = React.useState<TalkJson[][]>(
    getPagedTalksJson(talksJson),
  );
  const [searchedTalks, setSearchedTalks] = React.useState<TalkJson[]>(
    talksJson,
  );

  const totalCount = talksJson.length;

  React.useEffect(() => {
    setTalks(getPagedTalksJson(searchedTalks));
    setSelectedPage(1);
  }, [searchedTalks]);

  React.useEffect(() => {
    setTalks(getPagedTalksJson(talksJson));
    setSelectedPage(1);
  }, [talksJson]);

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
        <div className={cx("searchBox")}>
          <SearchBox masterItems={talksJson} setItem={setSearchedTalks} />
        </div>
        <div className={cx("head")}>
          <ColorCircle />
          <Text bold={true}>Past Talks</Text>
          <ColorCircle color="orange" />
          <Text bold={true}>Talks Future</Text>
        </div>
        <div className={cx("body")}>
          {talks.length === 0 ? (
            <div className={cx("noTalk")}>
              <Text type="h1">Talks not found</Text>
            </div>
          ) : (
            talks[selectedPage - 1].map((talk: TalkJson) => {
              return (
                <span key={talk.title}>
                  <TalkCard {...talk} />
                </span>
              );
            })
          )}
        </div>
      </div>
      <div className={cx("pager")}>
        <div className={cx("pager")}>
          <Pager
            allPage={talks.length}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TalkList;
