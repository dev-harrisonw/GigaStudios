'use client';

import { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={53.482432}
            lng={-2.244051}
            text="Our home town"
          />
        </GoogleMapReact> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127867.11707663962!2d30.329999999999995!3d59.949999999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b32cbe2e9%3A0x74e032aa0505dfc!2sState%20Hermitage%20Museum!5e0!3m2!1sen!2sus!4v1695583675069!5m2!1sen!2sus"

          loading="lazy"
          allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"
          className=''
          style={{
            height: "100%",
            width: "100%",
          }}
        ></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;