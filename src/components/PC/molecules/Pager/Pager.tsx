import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import Text from "../../../Common/atoms/Text/Text";
import styles from "./Pager.scss";

const cx = classNames.bind(styles);
library.add(faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight);

interface Props {
  allPage: number;
  selectedPage: number;
  setSelectedPage?: React.Dispatch<React.SetStateAction<number>>;
}

const Pager: React.FC<Props> = ({ allPage, selectedPage, setSelectedPage }) => {
  const MAX_PAGER_NUM = 5;

  const setPages = () => {
    if (allPage <= MAX_PAGER_NUM) {
      const pagesArray = Array(allPage)
        .fill("")
        .map((page, index: number) => {
          return index + 1;
        });
      return pagesArray;
    } else if (selectedPage + MAX_PAGER_NUM - 1 <= allPage) {
      const pagesArray = Array(MAX_PAGER_NUM)
        .fill("")
        .map((page, index: number) => {
          return index + selectedPage;
        });
      return pagesArray;
    } else {
      const pagesArray = Array(MAX_PAGER_NUM)
        .fill("")
        .map((page, index: number) => {
          return allPage + index + 1 - MAX_PAGER_NUM;
        });
      return pagesArray;
    }
  };

  const pages = setPages();

  return (
    <div className={cx("container")}>
      {setSelectedPage ? (
        <>
          <div
            onClick={() => setSelectedPage(1)}
            className={cx("divButton", { disable: selectedPage <= 1 })}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className={cx("icon")}
              size="2x"
            />
          </div>
          <div
            onClick={() => setSelectedPage(selectedPage - 1)}
            className={cx("divButton", { disable: selectedPage <= 1 })}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={cx("icon")}
              size="2x"
            />
          </div>
          {pages.map((page: number) => (
            <div
              onClick={() => setSelectedPage(page)}
              key={`pager${page}`}
              className={cx("pageNumber", "divButton", {
                selected: selectedPage === page,
              })}
            >
              <span>
                <Text color="lime">{page}</Text>
              </span>
            </div>
          ))}
          <div
            onClick={() => setSelectedPage(selectedPage + 1)}
            className={cx("divButton", { disable: selectedPage === allPage })}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className={cx("icon")}
              size="2x"
            />
          </div>
          <div
            onClick={() => setSelectedPage(allPage)}
            className={cx("divButton", { disable: selectedPage === allPage })}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={cx("icon")}
              size="2x"
            />
          </div>
        </>
      ) : (
        <>
          <Link to="1" className={cx({ disable: selectedPage <= 1 })}>
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className={cx("icon")}
              size="2x"
            />
          </Link>
          <Link
            to={`${selectedPage - 1}`}
            className={cx({ disable: selectedPage <= 1 })}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={cx("icon")}
              size="2x"
            />
          </Link>
          {pages.map((page: number) => (
            <Link
              to={`${page}`}
              key={`pager${page}`}
              className={cx("pageNumber", { selected: selectedPage === page })}
            >
              <span>
                <Text color="lime">{page}</Text>
              </span>
            </Link>
          ))}
          <Link
            to={`${selectedPage + 1}`}
            className={cx({ disable: selectedPage === allPage })}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className={cx("icon")}
              size="2x"
            />
          </Link>
          <Link
            to={`${allPage}`}
            className={cx({ disable: selectedPage === allPage })}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={cx("icon")}
              size="2x"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default Pager;
