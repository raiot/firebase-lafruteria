import * as React from 'react';
import { Component } from 'react';

import { Slider, Slide, Button } from 'react-materialize';

import * as greenJuice from '../../assets/home/green-juice.jpeg';
import * as panini from '../../assets/home/panini.jpeg';
import * as vampiro from '../../assets/home/vampiro.jpeg';

import './home.less';


export default
class Home extends Component {
    public render() {
        const defaultSlideStyle: any = {
            color: '#fff',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        };
        const secondSlideStyle: any = {
            color: '#000',
            textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'
        };
        const secondSlideText: any = <span style={ secondSlideStyle }>
            Panini con pan de chapata
        </span>;
        return(
            <div>
                <div className='carousel-container'>
                    <Slider interval={ 3000 }>
                        <Slide
                            title={ <span style={ defaultSlideStyle }>Ingredientes frescos</span> }
                            src={ greenJuice }
                            placement={ 'left' }
                            className='slide'
                        >
                            <p style={ defaultSlideStyle }>Prueba nuestro jugo verde</p>
                            <Button
                                waves='light'
                                node='a'
                                className='light-green lighten-1'
                                href='#/menu'
                            >
                                Ver menú
                            </Button>
                        </Slide>
                        <Slide
                            title={ secondSlideText }
                            src={ panini }
                            placement={ 'left' }
                        >
                            <Button
                                waves='light'
                                node='a'
                                className='light-green lighten-1'
                                href='#/menu'
                            >
                                Ver menú
                            </Button>
                        </Slide>
                        <Slide
                            title={ <span style={ defaultSlideStyle }>Conoce nuestra variedad de jugos</span> }
                            src={ vampiro }
                            placement={ 'left' }
                        >
                            <Button
                                waves='light'
                                node='a'
                                className='light-green lighten-1'
                                href='#/menu'
                            >
                                Ver menú
                            </Button>
                        </Slide>
                    </Slider>
                </div>
            </div>
        );
    }
}
