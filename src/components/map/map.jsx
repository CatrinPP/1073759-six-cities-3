import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offerShape, MAP_ICON_SIZE, ZOOM_VALUE, cityShape} from '../../const.js';
import leaflet from 'leaflet';

class Map extends PureComponent {
  _renderMap() {
    const {city, currentOffer, isBlockedZoom, offers} = this.props;
    const cityCenter = city.coords;

    if (offers.length) {
      const placesCoords = offers.map((offer) => offer.coords);

      const showAllMarkers = () => {
        placesCoords.map((coords) => {
          leaflet
            .marker(coords, {icon: regularIcon})
            .addTo(this.map);
        });

        if (currentOffer) {
          leaflet.marker(currentOffer.coords, {icon: activeIcon}).addTo(this.map);
        }
      };

      const LeafIcon = leaflet.Icon.extend({
        options: {
          iconSize: [MAP_ICON_SIZE, MAP_ICON_SIZE]
        }
      });

      const regularIcon = new LeafIcon({iconUrl: `img/pin.svg`});
      const activeIcon = new LeafIcon({iconUrl: `img/pin-active.svg`});

      this.map = leaflet.map(`map`, {
        center: cityCenter,
        marker: true,
        zoom: ZOOM_VALUE,
        zoomControl: false,
      });

      this.map.setView(cityCenter, ZOOM_VALUE);

      if (isBlockedZoom) {
        this.map.dragging.disable();
        this.map.scrollWheelZoom.disable();
      }

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      showAllMarkers();
    } else {
      return;
    }
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this._renderMap();
  }

  render() {
    const {mapWidth} = this.props;

    return (
      <div id="map" style={{width: mapWidth, height: `100%`, margin: `0 auto`}}></div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.shape(cityShape).isRequired,
  currentOffer: PropTypes.shape(offerShape),
  isBlockedZoom: PropTypes.bool.isRequired,
  mapWidth: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  offersCount: PropTypes.number
};

export default Map;
