import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap'

import './promos.css';

export default 
class Promos extends Component {
    render() {
        return(
            <div className='promos'>
                <div className='promo'>
                    <h1 className='display-4'>
                        10% 
                        <i class='fa fa-tag'></i>
                    </h1>
                    <p> Presentando tu recibo del Agua </p>
                </div>
                <div className='promo'>
                    <h1 className='display-4'>
                        15% 
                        <i class='fa fa-tag'></i>
                    </h1>
                    <p> Si eres miembro de Aloha </p>
                </div>
            </div>
        );
    }
}