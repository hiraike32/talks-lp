import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { CountryJson } from "../../../types/talks";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import styles from "./TalkTotalCard.scss";

const cx = classNames.bind(styles);
library.add(faArrowRight);

const TalkTotalCard: React.FC<CountryJson> = ({ country, total }) => (
  <div className={cx("container")}>
    <Text type="h3">{country}</Text>
    <Text type="h3">{total}</Text>
    <Button to={`talks/country/${country}`} color="lime">
      <Text type="h3">Detail</Text>
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  </div>
);

export default TalkTotalCard;
