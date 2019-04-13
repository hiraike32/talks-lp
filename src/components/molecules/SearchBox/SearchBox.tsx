import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import styles from "./SearchBox.scss";

const cx = classNames.bind(styles);
library.add(faSearch, faSquare);

interface Props {
  items: any[];
  setItem: () => void;
}

const SearchBox: React.FC<Props> = ({ items, setItem }) => {
  return (
    <div className={cx("container")}>
      <input type="text" id="search" className={cx("input")} />
      <span className={cx("icons")}>
        <FontAwesomeIcon
          icon={faSquare}
          className={cx("squareIcon")}
          size="4x"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={cx("searchIcon")}
          size="2x"
        />
      </span>
    </div>
  );
};

export default SearchBox;
