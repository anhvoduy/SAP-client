import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Gold from './components/gold';
import Money from './components/money';

const RouteConfig = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/gold">
                    <Gold />
                </Route>
                <Route exact path="/money">
                    <Money />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouteConfig;