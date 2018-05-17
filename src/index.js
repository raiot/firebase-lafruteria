import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './app';
import Home from './components/home';
import Branch from './components/branch';
import Menu from './components/menu';

import './styles/materialize-font.css';
import './styles/index.css';

ReactDOM.render(
    <HashRouter>
        <App>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/branch' component={ Branch }/>
                <Route exact path='/menu' component={ Menu }/>
            </Switch>
        </App>
    </HashRouter>, document.getElementById( 'root' ));
    registerServiceWorker();