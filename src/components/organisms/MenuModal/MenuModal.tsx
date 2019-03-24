import classNames from "classnames/bind";
import * as React from "react";
import styles from "./MenuModal.scss";
import Text from "../../atoms/Text/Text";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelection from "../../molecules/LanguageSelection/LanguageSelection";

const cx = classNames.bind(styles);
library.add(faTimes);

type Props = {
  isMenuModal: boolean;
  setMenuModal: () => void;
};

const MenuModal: React.FC<Props> = ({ isMenuModal, setMenuModal }) => (
  <>
    {isMenuModal && (
      <div className={cx("container")}>
        <div className={cx("header")}>
          <LanguageSelection language="en" />
          <div className={cx("title")}>
            <Text light type="h2">
              Erick Wendel
            </Text>
            <Text light type="h2" color="lime">
              Talks
            </Text>
          </div>
          <div className={cx("close")}>
            <FontAwesomeIcon icon={faTimes} size="3x" color="#fff" />
          </div>
        </div>
        <div className={cx("menu")}>
          <Text light type="h2">
            TALKS
          </Text>
          <Text light type="h2">
            POSTS
          </Text>
          <Text light type="h2">
            VIDEOS
          </Text>
          <Text light type="h2">
            CONTACT
          </Text>
        </div>
      </div>
    )}
  </>
);

export default MenuModal;
