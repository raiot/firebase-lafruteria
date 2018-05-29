import * as React from 'react';
import { Component } from 'react';

import fb from '../../assets/social-media/fb.png';
import insta from '../../assets/social-media/instagram.png';

import './footer.css';

export default
class FooterContainer extends Component {
    render () {
        const style = { maxWidth: '20px'};
        const aStyle = { textDecoration: 'none', color: '#fff', fontSize: '1.2em' };
        const dStyle = { padding: '10px' };
        return(
            <footer className='footer'>
                <div style={{ display: 'inline-block', position: 'absolute', right: 0, marginTop: '15px' }}>
                    <div className='follow-text'>
                        <h5>Siguenos en nuestras redes sociales</h5>
                    </div>
                    <ul>
                        <li>
                            <a
                                rel='instagram la fruteria'
                                href='https://instagram.com/lafruteriahmo'
                                target='_blank'
                                style={ aStyle }
                            >
                                <i className='fa fa-instagram' />
                            </a>
                        </li>
                        <li>
                            <a
                                rel='facebook la fruteria'
                                href='https://facebook.com/lafruteriahmo'
                                target='_blank'
                                style={ aStyle }
                            >
                                <i className='fa fa-facebook-square' />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
