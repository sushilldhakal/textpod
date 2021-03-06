import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import "./App.css";

import { Loading } from "./loading/Loading";

const timeout = 10000; // 10 seconds, default is disable
const delay = 200; // default is 0.2 seconds

// const Home = Loadable({
//   loader: () => import('./home/Home'),
//   loading: Loading,
//   timeout,
//   delay,
// });

const Viewer = Loadable({
  loader: () => import("./viewer/Viewer"),
  loading: Loading,
  timeout,
  delay
});

const Editor = Loadable({
  loader: () => import("./editor/Editor"),
  loading: Loading,
  timeout,
  delay
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/*/view" component={Viewer} />
              <Route exactpath="/" component={Editor} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
