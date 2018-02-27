import * as React from 'react';
import { Component } from 'react';
import { Pagination } from 'react-materialize';

import * as menuJuice from '../../assets/menu/menu-juice.jpg'
import * as menuFood from '../../assets/menu/menu-food.jpg';
import * as menuYog from '../../assets/menu/menu-yog.jpg';

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
            <img src={ imgJuice } alt='menu jugos'/>,
            <img src={ imgFood } alt='menu comida'/>,
            <img src={ imgYog } alt='menu yogurt'/>
        ];
        const { pageNumber } = this.state;
        return(
        <div>
            { items[pageNumber - 1] }
            <Pagination
                items={ items.length }
                activePage={ pageNumber }
                onSelect={ this.handleSelect }
            />
        </div>);
    }

    private handleSelect = (pageNumber: number) => {
        this.setState({
            pageNumber
        });
    }
}
