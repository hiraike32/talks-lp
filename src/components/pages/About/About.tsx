import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import photo from "../../../image/erickwendel.png";
import Tag from "../../atoms/Tag/Tag";
import Text from "../../atoms/Text/Text";
import AboutLinkIcon, {
  Props as LinkIconProps,
} from "../../molecules/AboutLinkIcon/AboutLinkIcon";
import styles from "./About.scss";

const cx = classNames.bind(styles);
library.add(faArrowLeft);

const linkIcons: Array<{ type: LinkIconProps["type"]; href: string }> = [
  { type: "twitter", href: "https://twitter.com/erickwendel_" },
  { type: "facebook", href: "https://www.facebook.com/page.erickwendel" },
  { type: "github", href: "https://github.com/ErickWendel" },
  { type: "medium", href: "https://medium.com/@erickwendel" },
  { type: "email", href: "erickwendel@mail.com" },
];

const tags = ["#opensource", "#nodejs", "#typescript"];

const About: React.FC = ({}) => {
  const [projects, setProjects] = React.useState();

  return (
    <div className={cx("container")}>
      <div className={cx("column")}>
        <div className={cx("head")}>
          <Link to="/">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className={cx("arrow")}
            />
          </Link>
          <Text color="lime" type="h2" bold={true} italic={true}>
            About
          </Text>
        </div>
        <div className={cx("photo")}>
          <img src={photo} />
        </div>
        <div className={cx("linkIcons")}>
          {linkIcons.map((linkIcons) => {
            return (
              <span key={linkIcons.type} className={cx("linkIcon")}>
                <AboutLinkIcon type={linkIcons.type} href={linkIcons.href} />
              </span>
            );
          })}
        </div>
        <div className={cx("tags")}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className={cx("titles")}>
          <Text type="h3" color="lime">
            Software Consultant
          </Text>
          <Text type="h3" color="lime">
            Microsoft MVP
          </Text>
          <Text type="h3" color="lime">
            Google Dev Expert
          </Text>
        </div>
      </div>
    </div>
  );
};

export default About;
