import * as React from 'react';
import { Component } from 'react';

import { Navbar, NavItem } from 'react-materialize';

import png from '../../assets/brand.png';

import './nav.css';

export default
class Nav extends Component {
    render () {
        const brand = <img className='logo' src={ png } alt='la fruteria'/>
        return(
            <div>
                <Navbar className='light-green lighten-1' brand={ brand } left>
                    <NavItem href='#/'>Inicio</NavItem>
                    <NavItem href='#/branch'>Sucursal</NavItem>
                    <NavItem href='#/menu'>Menú</NavItem>
                </Navbar>
            </div>
        );
    }
}