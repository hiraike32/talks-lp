import classNames from "classnames/bind";
import * as React from "react";
import { ProjectJson } from "../../../types/projects";
import Tag from "../../atoms/Tag/Tag";
import Text from "../../atoms/Text/Text";
import styles from "./ProjectCard.scss";

const cx = classNames.bind(styles);

const ProjectCard: React.FC<ProjectJson> = ({
  title,
  abstract,
  tags,
  link,
  date,
}) => (
  <div className={cx("container")}>
    <a href={link} target="_blank">
      <div className={cx("head")}>
        <Text type="h3" bold={true}>
          {title}
        </Text>
      </div>
      <div className={cx("tag")}>
        {tags.map((tag: string, index: number) => {
          return <Tag key={`${tag}${index}`}>{tag}</Tag>;
        })}
      </div>
      <div className={cx("abstract")}>
        <Text>{abstract}</Text>
      </div>
      <div className={cx("bottom")}>
        <Text italic={true}>{date}</Text>
      </div>
    </a>
  </div>
);

export default ProjectCard;
