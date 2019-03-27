import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../organisms/Header/Header";
import MenuModal from "../organisms/MenuModal/MenuModal";
import TalkCity from "./TalkCity/TalkCity";
import TalkDetail from "./TalkDetail/TalkDetail";
import TalkMap from "./TalkMap/TalkMap";
import Top from "./Top/Top";

const Root: React.FC = () => {
  const [isMenuModal, setMenuModal] = useState(false);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header setMenuModal={setMenuModal} />
      <MenuModal isMenuModal={isMenuModal} setMenuModal={setMenuModal} />
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route exact={true} path="/talks" component={TalkMap} />
        <Route exact={true} path="/talks/:country" component={TalkCity} />
        <Route
          exact={true}
          path="/talks/:country/:date"
          component={TalkDetail}
        />
      </Switch>
    </Router>
  );
};

export default Root;
