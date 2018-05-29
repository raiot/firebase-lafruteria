import React from 'react';
import { Component } from 'react';

import menuJuice from '../../assets/menu/menu-juice.jpg'
import menuFood from '../../assets/menu/menu-food.jpg';
import menuYog from '../../assets/menu/menu-yog.jpg';

import './menu.css';

export default
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1
        }
    }
    render() { 
        const items = [
            <img className='menu-img' src={ menuJuice } alt='menu jugos'/>,
            <img className='menu-img' src={ menuFood } alt='menu comida'/>,
            <img className='menu-img' src={ menuYog } alt='menu yogurt'/>
        ];
        const { pageNumber } = this.state;
        return(
        <div className='menu-container'>
            { items[pageNumber - 1] }
            <div className='pagination-container'>
            </div>
        </div>);
    }

    handleSelect = (pageNumber) => {
        this.setState({
            pageNumber
        });
    }
}
