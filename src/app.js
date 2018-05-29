import React from 'react';
import { Component } from 'react';

import Footer from './components/footer';
import Navigation from './components/nav';

export default 
class AppRouter extends Component {
    render () {
        return(
            <div>
                <Navigation/>
                { this.props.children }
                <Footer/>
            </div>
        );
    }
}
