import * as React from 'react';
import { Component } from 'react';

import { 
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
    Collapse,
    NavbarToggler
} from 'reactstrap';

import png from '../../assets/brand.png';

import './nav.css';

export default
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render () {
        return(
            <div>
                <Navbar dark expand='md'>
                    <NavbarBrand href='/'>
                        <img src={png} style={{maxWidth: '100px', maxHeight: '50px'}} alt='la fruteria'/>
                    </NavbarBrand>
                    <a href='#/' style={{ textDecoration: 'none', color: '#000' }}>
                        <span className='nav-font-light'>La</span>
                        <span className='nav-font'>frutería</span>
                    </a>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-font-light' href='#/'>Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-font-light' href='#/branch'>Sucursal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-font-light' href='#/menu'>Menú</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}