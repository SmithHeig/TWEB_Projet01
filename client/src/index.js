import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import Friends from "./components/Friends";
require('dotenv').config();

const history = createHistory();

const routing = (
  <Router basehistory={history} basename={process.env.PUBLIC_URL}>
    <div className="App-body">
        <Route exact path="/" component={App} />
        <Route exact path="/friends/:username" component={Friends} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
