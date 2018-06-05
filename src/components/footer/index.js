import * as React from 'react';
import { Component } from 'react';

import './footer.css';

export default
class FooterContainer extends Component {
    render () {
        return(
            <footer className='footer'>
                <div style={{ display: 'inline-block', position: 'absolute', right: 0, marginTop: '15px' }}>
                    <div className='follow-text'>
                        <h5>Siguenos en nuestras redes sociales</h5>
                    </div>
                    <ul>
                        <li>
                            <a
                                href='https://instagram.com/lafruteriahmo'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fa fa-instagram' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://facebook.com/lafruteriahmo'
                                target='_blank'
                                rel='noopener noreferrer'
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
