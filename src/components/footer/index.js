import * as React from 'react';
import { Component } from 'react';

import { Footer } from 'react-materialize';

import fb from '../../assets/social-media/fb.png';
import insta from '../../assets/social-media/instagram.png';

export default
class FooterContainer extends Component {
    render () {
        const style = { maxWidth: '20px'};
        const aStyle = { textDecoration: 'none', color: '#000', fontSize: '1.2em' };
        const dStyle = { padding: '10px' };
        return(
            <div className='footer-container'>
                <Footer
                    className='light-green lighten-1'
                    copyrights='&#x24B8; 2018 La frutería'
                    links={
                        <ul>
                            <li>
                                <img style={ style } src={ insta } alt='instagram'/>
                                <a
                                    rel='instagram la fruteria'
                                    href='https://instagram.com/lafruteriahmo'
                                    target='_blank'
                                    style={ aStyle }
                                >
                                    @lafruteriahmo
                                </a>
                            </li>
                            <li>
                            <img style={ style } src={ fb } alt='facebook' /> 
                                <a
                                    rel='facebook la fruteria'
                                    href='https://facebook.com/lafruteriahmo'
                                    target='_blank'
                                    style={ aStyle }
                                >
                                    /lafruteriahmo
                                </a>
                            </li>
                        </ul>
                    }
                >
                    <div>
                        <h5>Siguenos en nuestras redes sociales</h5>
                    </div>
                </Footer>
            </div>
        );
    }
}
