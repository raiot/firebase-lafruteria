import * as React from 'react';
import { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Footer } from 'react-materialize';

import createBrowserHistory from 'history/createBrowserHistory';

import Nav from './components/nav';
import Home from './components/home';

const history = createBrowserHistory();

export default 
class AppRouter extends Component {
    public render () {
        return(
            <div>
                <Nav />
                <Router history={ history }>
                    <Route path='/' component={ Home }/>
                </Router>
                <div className='footer-container'>
                    <Footer className='light-green lighten-1' />
                </div>
            </div>
        );
    }
}

