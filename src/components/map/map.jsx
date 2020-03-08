import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offerShape, MAP_ICON_SIZE, ZOOM_VALUE, cityShape} from '../../const.js';
import leaflet from 'leaflet';

class Map extends PureComponent {
  _renderMap() {
    const {offers, city} = this.props;
    const cityCenter = city.coords;

    if (offers.length) {
      const placesCoords = offers.map((offer) => offer.coords);

      const showAllMarkers = () => {
        placesCoords.map((coords) => {
          leaflet
            .marker(coords, {icon})
            .addTo(this.map);
        });
      };

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [MAP_ICON_SIZE, MAP_ICON_SIZE]
      });

      this.map = leaflet.map(`map`, {
        center: cityCenter,
        zoom: ZOOM_VALUE,
        zoomControl: false,
        marker: true
      });

      this.map.setView(cityCenter, ZOOM_VALUE);

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
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  city: PropTypes.shape(cityShape).isRequired,
  mapWidth: PropTypes.string.isRequired,
  offersCount: PropTypes.number
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city
});

export {Map};
export default connect(mapStateToProps)(Map);
