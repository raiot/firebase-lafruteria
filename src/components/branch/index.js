import React from 'react';
import { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

import googleMapsKey from '../../maps-config.js';

class Branch extends Component {

    render() {
        return(
            <div>
                <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{ lat: 29.1261038, lng: -110.9594614 }}
                >
                    <Marker position={{ lat: 29.1261038, lng: -110.9594614 }} />
                </GoogleMap>
            </div>
        );
    }
}

const props = withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
});

export default compose(props, withScriptjs, withGoogleMap)(Branch)
