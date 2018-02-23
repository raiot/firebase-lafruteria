import * as React from 'react';
import { Component } from 'react';

import Footer from './components/footer';
import Nav from './components/nav';



interface Props {
    children?: any;
}

export default 
class AppRouter extends Component<Props, {}> {
    public render () {
        return(
            <div>
                <Nav/>
                { this.props.children }
                <Footer/>
            </div>
        );
    }
}
