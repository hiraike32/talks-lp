import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import styles from "./SearchBox.scss";

const cx = classNames.bind(styles);
library.add(faSearch);

interface Props {
  items: any[];
  setItem: () => void;
}

const SearchBox: React.FC<Props> = ({ items, setItem }) => {
  return (
    <div className={cx("container")}>
      <input type="text" placeholder="Search" />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SearchBox;
