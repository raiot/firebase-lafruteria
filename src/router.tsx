import * as React from 'react';
import { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/home';

const history = createBrowserHistory();

export default 
class AppRouter extends Component {
    public render () {
        return(
            <Router history={ history }>
                <Route exact path='/' component={ Home }/>
            </Router>
        );
    }
}

