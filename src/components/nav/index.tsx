import * as React from 'react';
import { Component } from 'react';

import { Navbar, NavItem } from 'react-materialize';

export default
class Nav extends Component {
    public render () {
        return(
            <div>
                <Navbar brand='logo' left>
                    <NavItem href='#/'>Inicio</NavItem>
                    <NavItem href='#/menu'>Menú</NavItem>
                    <NavItem href='#/aboutus'>Acerca de</NavItem>
                    <NavItem href='#/contact'>Contacto</NavItem>
                </Navbar>
            </div>
        );
    }
}