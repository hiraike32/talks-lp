import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faMedium,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import styles from "./AboutLinkIcon.scss";

const cx = classNames.bind(styles);
library.add(
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
  faMedium,
  faSquare,
  faEnvelopeSquare,
  faLinkedin,
);

export interface Props {
  type: "twitter" | "facebook" | "github" | "email" | "medium" | "linkedin";
  href: string;
}

const AboutLinkIcon: React.FC<Props> = ({ type, href }) => (
  <>
    {type === "twitter" && (
      <a href={href} className={cx("link")} target="_blank">
        <FontAwesomeIcon icon={faSquare} size="2x" className={cx("white")} />
        <FontAwesomeIcon
          icon={faTwitterSquare}
          size="2x"
          className={cx("icon", type)}
          mask="twitter"
        />
      </a>
    )}
    {type === "facebook" && (
      <a href={href} className={cx("link")} target="_blank">
        <FontAwesomeIcon icon={faSquare} size="2x" className={cx("white")} />
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size="2x"
          className={cx("icon", type)}
        />
      </a>
    )}
    {type === "github" && (
      <a href={href} className={cx("link")} target="_blank">
        <FontAwesomeIcon icon={faSquare} size="2x" className={cx("white")} />
        <FontAwesomeIcon
          icon={faGithubSquare}
          size="2x"
          className={cx("icon", type)}
        />
      </a>
    )}
    {type === "linkedin" && (
      <a href={href} className={cx("link")} target="_blank">
        <FontAwesomeIcon icon={faSquare} size="2x" className={cx("white")} />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className={cx("icon", type)}
        />
      </a>
    )}
    {type === "medium" && (
      <a href={href} className={cx("link")} target="_blank">
        <FontAwesomeIcon icon={faSquare} size="2x" className={cx("white")} />
        <FontAwesomeIcon
          icon={faMedium}
          size="2x"
          className={cx("icon", type)}
        />
      </a>
    )}
    {type === "email" && (
      <a href={href} className={cx("link")} target="_blank">
        <FontAwesomeIcon icon={faSquare} size="2x" className={cx("white")} />
        <FontAwesomeIcon
          icon={faEnvelopeSquare}
          size="2x"
          className={cx("icon", type)}
        />
      </a>
    )}
  </>
);

export default AboutLinkIcon;
