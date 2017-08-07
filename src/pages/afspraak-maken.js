import React from 'react'
import Link from 'gatsby-link'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import './afspraak-maken.css';
const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyB44bVnconCqStJOcxfK7gTx2nKN0JsbYA";

const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
const topRight = 3;

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    googleMapURL={googleMapURL}
    options={ {styles: mapStyles } }
    defaultCenter={{ lat: 51.5498281, lng: 4.0804409  }}>
      <Marker position={{ lat: 51.5498281, lng: 4.0804409 }} animation={"BOUNCE"}/>
  </GoogleMap>
)));

const Appointment = () =>
  <div>
    <GettingStartedGoogleMap
      googleMapURL={googleMapURL}
      loadingElement={
        <div></div>
      }
      containerElement={
        <div style={{ height: `100vh` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
    />
    <div className="mdc-card mdc-card--legend">
      <section className="mdc-card__supporting-text">
        <p style={{zIndex: 9999}}>
        Rädda Barnenstraat 1, 4695 BJ Sint-Maartensdijk <br />
        Telefoon: 06 24526696
        </p>
      </section>
      <section className="mdc-card__actions">
        <a href="tel:+31624526696" className="mdc-button mdc-button--compact mdc-card__action">Bellen</a>
      </section>
    </div>
  </div>

export default Appointment
