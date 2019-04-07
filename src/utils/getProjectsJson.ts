import projects from "../resource/projects.json";
import { ProjectJson } from "../types/projects.js";

export const getPagedProjectJson = () => {
  const projectsJson: ProjectJson[] = [];
  projects.map((project: ProjectJson) => {
    projectsJson.push(project);
  });
  return projectsJson;
};
