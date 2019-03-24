import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Header.scss";
import Text from "../../atoms/Text/Text";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
library.add(faBars);

type Props = {
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setMenuModal }) => (
  <div className={cx("container")}>
    <Link to="/">
      <div className={cx("titleName")}>
        <Text type="h3" bold color="lime">
          Erick
        </Text>
        <Text type="h3" light>
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
