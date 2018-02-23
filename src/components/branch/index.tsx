import * as React from 'react';
import { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { Card } from 'react-materialize';

import * as config from '../../../config.js';

class Branch extends Component {

    public render() {
        const style: any = {
            color: '#fff',
            fontSize: '1.3em'
        };
        return(
            <div>
                <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{ lat: 29.1185677, lng: -110.9558349 }}
                >
                    <Marker position={{ lat: 29.118542, lng: -110.955546 }} />
                </GoogleMap>
                <Card
                    style= { {width: '30%', margin: '0 35%', marginTop: '10px'} }
                    className='light-green lighten-1'
                    textClassName='white-text'
                    title='Dirección'>
                    <span style={ style }>
                        Calle Uno 42D, entre Avenida Nueve y Avenida Diez
                    </span>
                </Card>
            </div>
        );
    }
}

const props = withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
});

export default compose(props, withScriptjs, withGoogleMap)(Branch)
