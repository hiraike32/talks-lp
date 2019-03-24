import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./Top/Top";
import Header from "../organisms/Header/Header";
import MenuModal from "../organisms/MenuModal/MenuModal";
import TalkMap from "./TalkMap/TalkMap";

const Root: React.FC = () => {
  const [isMenuModal, setMenuModal] = useState(false);
  return (
    <Router>
      <Header setMenuModal={setMenuModal} />
      <MenuModal isMenuModal={isMenuModal} setMenuModal={setMenuModal} />
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route exact={true} path="/talks" component={TalkMap} />
      </Switch>
    </Router>
  );
};

export default Root;
