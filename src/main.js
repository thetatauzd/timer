import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Timer from "./timer";

const Main = () => {
    <main>
        <Switch>
            <Route exact path="/" component={App} />
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/timer" component={Timer} />
        </Switch>
    </main>;
};

export default Main;
