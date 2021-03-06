import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../organisms/Header/Header";
import MenuModal from "../organisms/MenuModal/MenuModal";
import About from "./About/About";
import Post from "./Post/Post";
import Talk from "./Talk/Talk";
import TalkCityMap from "./TalkCityMap/TalkCityMap";
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
        <Route exact={true} path="/talks/:page" component={Talk} />
        <Route
          exact={true}
          path="/talks/country/:country"
          component={TalkCityMap}
        />
        <Route exact={true} path="/talk/detail/:date" component={TalkDetail} />
        <Route exact={true} path="/posts/:page" component={Post} />
        <Route exact={true} path="/videos/:page" component={Video} />
        <Route exact={true} path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Root;
