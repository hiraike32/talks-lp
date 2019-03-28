import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../organisms/Header/Header";
import MenuModal from "../organisms/MenuModal/MenuModal";
import Post from "./Post/Post";
import TalkCity from "./TalkCity/TalkCity";
import TalkDetail from "./TalkDetail/TalkDetail";
import TalkMap from "./TalkMap/TalkMap";
import Top from "./Top/Top";
import Video from "./Video/Video";

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
        <Route exact={true} path="/posts/:page" component={Post} />
        <Route exact={true} path="/videos/:page" component={Video} />
      </Switch>
    </Router>
  );
};

export default Root;
