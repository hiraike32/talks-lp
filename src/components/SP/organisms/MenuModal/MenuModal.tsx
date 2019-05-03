import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { NavLink } from "react-router-dom";
import Text from "../../../Common/atoms/Text/Text";
import LanguageSelection from "../../../Common/molecules/LanguageSelection/LanguageSelection";
import styles from "./MenuModal.scss";

const cx = classNames.bind(styles);
library.add(faTimes);

interface Props {
  isMenuModal: boolean;
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal: React.FC<Props> = ({ isMenuModal, setMenuModal }) => (
  <>
    <div
      className={cx("container", { open: isMenuModal })}
      onClick={() => setMenuModal(false)}
    >
      <div className={cx("header")}>
        <div className={cx("title")}>
          <NavLink to="/" onClick={() => setMenuModal(false)}>
            <Text light={true} type="h2">
              Erick Wendel
            </Text>
            <Text light={true} type="h2" color="lime">
              Talks
            </Text>
          </NavLink>
        </div>
        <div className={cx("closeButton")} onClick={() => setMenuModal(false)}>
          <FontAwesomeIcon icon={faTimes} size="3x" color="#fff" />
        </div>
      </div>
      <div className={cx("languageSelection")}>
        <LanguageSelection language="en" />
      </div>
      <div className={cx("menu")}>
        <div className={cx("menuItem")}>
          <NavLink
            exact={true}
            to="/talks"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light={true} type="h2">
              TALKS
            </Text>
          </NavLink>
        </div>
        <div className={cx("menuItem")}>
          <NavLink
            exact={true}
            to="/posts/1"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light={true} type="h2">
              POSTS
            </Text>
          </NavLink>
        </div>
        <div className={cx("menuItem")}>
          <NavLink
            exact={true}
            to="/videos/1"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light={true} type="h2">
              VIDEOS
            </Text>
          </NavLink>
        </div>
        <div className={cx("menuItem")}>
          <NavLink
            exact={true}
            to="/about"
            activeClassName={cx("active")}
            onClick={() => setMenuModal(false)}
          >
            <Text light={true} type="h2">
              ABOUT
            </Text>
          </NavLink>
        </div>
      </div>
    </div>
  </>
);

export default MenuModal;
