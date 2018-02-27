import * as React from 'react';
import { Component } from 'react';
import { Pagination } from 'react-materialize';

import * as menuJuice from '../../assets/menu/menu-juice.jpg'
import * as menuFood from '../../assets/menu/menu-food.jpg';
import * as menuYog from '../../assets/menu/menu-yog.jpg';

import './menu.less';

interface State {
    pageNumber: number;
}

export default
class Menu extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageNumber: 1
        }
    }
    public render() { 
        const imgJuice: any = menuJuice;
        const imgFood: any = menuFood;
        const imgYog: any = menuYog;
        const items: any[] = [
            <img className='menu-img' src={ imgJuice } alt='menu jugos'/>,
            <img className='menu-img' src={ imgFood } alt='menu comida'/>,
            <img className='menu-img' src={ imgYog } alt='menu yogurt'/>
        ];
        const { pageNumber } = this.state;
        return(
        <div className='menu-container'>
            { items[pageNumber - 1] }
            <div className='pagination-container'>
                <Pagination
                    items={ items.length }
                    activePage={ pageNumber }
                    onSelect={ this.handleSelect }
                />
            </div>
        </div>);
    }

    private handleSelect = (pageNumber: number) => {
        this.setState({
            pageNumber
        });
    }
}
