import classNames from "classnames/bind";
import * as React from "react";
import styles from "./TalkTotalCard.scss";
import { CountryJson } from "../../../types/talks";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
library.add(faArrowRight);

const TalkTotalCard: React.FC<CountryJson> = ({ country, total }) => (
  <div className={cx("container")}>
    <Text>{country}</Text>
    <Text>{total}</Text>
    <Button to={`talks/${country}`} color="lime">
      <Text>Detail</Text>
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  </div>
);

export default TalkTotalCard;
