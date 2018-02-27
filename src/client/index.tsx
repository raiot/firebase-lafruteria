import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './app';
import Home from './components/home';
import Branch from './components/branch';
import Menu from './components/menu';

import './less/materialize-font.less';
import './less/index.less';

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