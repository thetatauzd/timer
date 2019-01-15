import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./main";
import App from "./App";
import Timer from "./timer";
import { Switch, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/timer" component={Timer} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
