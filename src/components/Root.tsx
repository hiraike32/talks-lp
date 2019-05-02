import React from "react";
import { getScreenSize } from "../utils/getDisplayWidth";
import PCRoot from "./PC/pages/Root";
import SPRoot from "./SP/pages/Root";

const Root: React.FC = () => {
  const screenSize = getScreenSize();

  return <>{screenSize > 768 ? <PCRoot /> : <SPRoot />}</>;
};

export default Root;
