import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import registerServiceWorker from './registerServiceWorker';

import App from './app';
import Home from './components/home';
import Branch from './components/branch';
import Menu from './components/menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(
    <ParallaxProvider>
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/branch' component={ Branch }/>
                    <Route exact path='/menu' component={ Menu }/>
                </Switch>
            </App>
        </HashRouter>
    </ParallaxProvider>, document.getElementById( 'root' ));
    registerServiceWorker();