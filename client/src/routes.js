import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Account from './components/account';
import AccountEdit from './components/accountEdit';

const RouteConfig = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/account">
                    <Account />
                </Route>
                <Route exact path="/account/:id">
                    <AccountEdit />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouteConfig;