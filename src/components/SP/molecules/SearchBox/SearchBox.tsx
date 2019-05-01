import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import styles from "./SearchBox.scss";

const cx = classNames.bind(styles);
library.add(faSearch, faSquare);

interface Props {
  masterItems: any[];
  setItem: React.Dispatch<any>;
}

const SearchBox: React.FC<Props> = ({ masterItems, setItem }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedWord = e.currentTarget.value.toLowerCase();
    const searchedItems = masterItems.filter((item: any) => {
      const tagIncluded = item.tags.map((tag: string) => {
        return tag.toLowerCase().indexOf(searchedWord) >= 0;
      });
      if (
        item.title.toLowerCase().indexOf(searchedWord) >= 0 ||
        tagIncluded.indexOf(true) >= 0
      ) {
        return item;
      }
    });
    setItem(searchedItems);
  };

  return (
    <div className={cx("container")}>
      <input
        type="text"
        id="search"
        className={cx("input")}
        onChange={handleSearch}
      />
      <FontAwesomeIcon icon={faSearch} className={cx("searchIcon")} size="lg" />
    </div>
  );
};

export default SearchBox;
