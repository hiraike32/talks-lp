import classNames from "classnames/bind";
import * as React from "react";
import styles from "./Header.scss";
import Text from "../../atoms/Text/Text";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
library.add(faBars);

const Header: React.FC = () => (
  <div className={cx("container")}>
    <div className={cx("titleName")}>
      <Text type="h3" bold color="lime">
        Erick
      </Text>
      <Text type="h3" light>
        Wendel
      </Text>
    </div>
    <div className={cx("menu")}>
      <FontAwesomeIcon icon={faBars} size="3x" color="#fff" />
    </div>
  </div>
);

export default Header;
