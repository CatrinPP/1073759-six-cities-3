import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import Cities from '../cities/cities.jsx';
import Map from '../map/map.jsx';
import {offersListShape} from '../../const.js';

const Main = ({offers, onPlaceCardNameClick}) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities
              offers={offers}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              offers={offers}
              onPlaceCardNameClick={onPlaceCardNameClick}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers[0].offers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersListShape)).isRequired,
  onPlaceCardNameClick: PropTypes.func,
};

export default Main;
