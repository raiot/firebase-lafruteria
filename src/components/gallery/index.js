import React, { Component } from 'react';


export default 
class Gallery extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: '5% 20%' }}>
                <iframe width='800px' height='400px' src="https://www.youtube.com/embed/4iuPoJvAwWM"  allowfullscreen></iframe>
            </div>
        );
    }
}