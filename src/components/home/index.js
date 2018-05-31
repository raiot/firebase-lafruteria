import React from 'react';
import { Component } from 'react';

import { Jumbotron } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';
import Branch from '../branch';

import parallRight from '../../assets/home/parall-right.png';
import parallLeft from '../../assets/home/parall-left.png';

import './home.css';


export default
class Home extends Component {
    render() {
        return(
            <div>
                <div>
                    <Jumbotron fluid style={{
                            textAlign: 'center'
                        }}>
                        <div className='parall-right'>
                            <Parallax
                                offsetXMax={-299}
                                offsetXMin={-129}
                                tag={'parall-left'}
                                slowScrollRate
                            >
                                <img src={parallLeft} alt='baguette' />
                            </Parallax>
                        </div>
                        <div className='content-container'>
                            <h1 className='display-3'>Snacks y comida saludable</h1>
                            <p className='lead'>
                                Ven a probar nuestra variedad de productos, desde deliciosos
                                snacks como raspados, tostitos con verdura, hasta comida preparada
                                como paninis, sandwich, comida corrida etc.
                            </p>
                        </div>
                    </Jumbotron>
                    <Jumbotron style={{
                            textAlign: 'left'
                        }}>
                                <div className='content-container free'>
                                    <h1 className='display-3'>Jugos y licuados</h1>
                                    <p className='lead'>
                                        Para empezar bien el dia prueba nuestros jugos y licuados
                                        saludables que te mantendran lleno de energía.
                                    </p>
                                </div>
                                <div className='parall-left'>
                                    <Parallax
                                        offsetXMax={30}
                                        offsetXMin={-59}
                                        tag={'parall-right'}
                                        slowScrollRate
                                    >
                                        <img src={parallRight} style={{ display: 'inline-block'}} alt='smoothie' />
                                    </Parallax>
                                </div>
                    </Jumbotron>
                    <Jumbotron style={{
                            textAlign: 'center'
                    }}>
                        <div>
                            <h1 className='display-3'>Encuéntranos</h1>
                            <p className='lead'>
                                Blvd. López Portillo 53 local C
                            </p>
                        </div>
                        <Branch />
                    </Jumbotron>
                </div>
            </div>
        );
    }
}
