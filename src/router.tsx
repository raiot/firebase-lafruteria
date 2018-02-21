import * as React from 'react';
import { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import Nav from './components/nav';

const history = createBrowserHistory();

export default 
class AppRouter extends Component {
    public render () {
        return(
            <div>
                <Nav />
                <Router history={ history }>
                </Router>
            </div>
        );
    }
}

