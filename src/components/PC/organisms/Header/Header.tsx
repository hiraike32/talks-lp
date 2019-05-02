import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import Text from "../../../Common/atoms/Text/Text";
import styles from "./Header.scss";

const cx = classNames.bind(styles);
library.add(faBars);

interface Props {
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setMenuModal }) => (
  <div className={cx("container")}>
    <Link to="/">
      <div className={cx("titleName")}>
        <Text type="h3" bold={true} color="lime">
          Erick
        </Text>
        <Text type="h3" light={true}>
          Wendel
        </Text>
      </div>
    </Link>
    <div className={cx("menu")} onClick={() => setMenuModal(true)}>
      <FontAwesomeIcon icon={faBars} size="3x" color="#fff" />
    </div>
  </div>
);

export default Header;
