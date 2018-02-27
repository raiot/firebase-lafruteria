import * as React from 'react';
import { Component } from 'react';

import { Navbar, NavItem } from 'react-materialize';

import * as png from '../../assets/brand.png';

import './nav.less';

export default
class Nav extends Component {
    public render () {
        const src: any = png;
        const brand = <img className='logo' src={ src } alt='la fruteria'/>
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