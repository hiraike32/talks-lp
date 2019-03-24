import classNames from "classnames/bind";
import * as React from "react";
import styles from "./MenuModal.scss";
import Text from "../../atoms/Text/Text";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelection from "../../molecules/LanguageSelection/LanguageSelection";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
library.add(faTimes);

type Props = {
  isMenuModal: boolean;
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuModal: React.FC<Props> = ({ isMenuModal, setMenuModal }) => (
  <>
    <div
      className={cx("container", { open: isMenuModal })}
      onClick={() => setMenuModal(false)}
    >
      <div className={cx("header")}>
        <LanguageSelection language="en" />
        <div className={cx("title")}>
          <NavLink to="/" onClick={() => setMenuModal(false)}>
            <Text light type="h2">
              Erick Wendel
            </Text>
            <Text light type="h2" color="lime">
              Talks
            </Text>
          </NavLink>
        </div>
        <div className={cx("closeButton")} onClick={() => setMenuModal(false)}>
          <FontAwesomeIcon icon={faTimes} size="3x" color="#fff" />
        </div>
      </div>
      <div className={cx("menu")}>
        <div className={cx("menuItem")}>
          <NavLink
            exact
            to="/talks"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light type="h2">
              TALKS
            </Text>
          </NavLink>
        </div>
        <div className={cx("menuItem")}>
          <NavLink
            exact
            to="/posts"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light type="h2">
              POSTS
            </Text>
          </NavLink>
        </div>
        <div className={cx("menuItem")}>
          <NavLink
            exact
            to="/videos"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light type="h2">
              VIDEOS
            </Text>
          </NavLink>
        </div>
        <div className={cx("menuItem")}>
          <NavLink
            exact
            to="/contact"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light type="h2">
              CONTACT
            </Text>
          </NavLink>
        </div>
      </div>
    </div>
  </>
);

export default MenuModal;
