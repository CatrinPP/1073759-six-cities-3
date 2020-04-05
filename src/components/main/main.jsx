import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OffersList from '../offers-list/offers-list.jsx';
import Cities from '../cities/cities.jsx';
import Map from '../map/map.jsx';
import {offerShape, cityShape, PlaceCardType} from '../../const.js';
import {getOffers, getLoadedState} from '../../reducer/data/selectors.js';
import {getCity, getOfferOnHover} from '../../reducer/app/selectors.js';
import Header from '../header/header.jsx';

const Main = ({city, isLoaded, offerOnHover, offers}) => {

  return isLoaded ? (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!offers.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${!offers.length ? `cities__places-container--empty` : ``}`}>
            <OffersList
              city={city}
              isCitiesClass={true}
              offers={offers}
              placeCardType={PlaceCardType.CITIES}
            />
            <div className="cities__right-section">
              {offers.length ?
                <section className="cities__map map">
                  <Map
                    city={city}
                    offerOnHover={offerOnHover}
                    isBlockedZoom={false}
                    mapWidth={`100%`}
                    offers={offers}
                  />
                </section>
                : ``
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  ) : (``);
};

Main.propTypes = {
  city: PropTypes.shape(cityShape).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  offerOnHover: PropTypes.shape(offerShape),
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  isLoaded: getLoadedState(state),
  offerOnHover: getOfferOnHover(state),
  offers: getOffers(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
