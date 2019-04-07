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
      <div className={cx("leftColumn")}>
        <div className={cx("head")}>
          <Link to="/">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className={cx("arrow", "icon")}
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
          <div className={cx("title")}>
            <Text type="h3" color="lime">
              Software Consultant
            </Text>
          </div>
          <div className={cx("title")}>
            <Text type="h3" color="lime">
              Microsoft MVP
            </Text>
          </div>
          <div className={cx("title")}>
            <Text type="h3" color="lime">
              Google Dev Expert
            </Text>
          </div>
        </div>
        <div className={cx("profile")}>
          <Text>
            Erick Wendel is a Speaker, Software Consultant and community
            Co-organizer in Brazil. <br />
            Named by Microsoft as{" "}
            <Text color="lime">
              <a
                href="https://mvp.microsoft.com/pt-br/PublicProfile/5002509?fullName=Erick%20%20%20Wendel"
                target="_blank"
                className={cx("linkTitle")}
              >
                Most Valuable Professional
              </a>
            </Text>
            , and by Google as{" "}
            <Text color="lime">
              <a
                href="https://developers.google.com/programs/experts/directory/"
                target="_blank"
                className={cx("linkTitle")}
              >
                Google Developer Expert
              </a>
            </Text>
            , a specialist in Node.js and Javascript Applications.
            <br /> He is a Software Independent Architect who helps companies to
            make better and cheaper applications using Serverless architectures,
            Container based applications, and Hybrid Cloud solutions. <br />
            He has experience speaking and teaching at the biggest conferences
            in Brazil and Americas, working as voluntary Leader of NodeBR,
            Javascript São Paulo and Nerdzão Communities.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default About;
