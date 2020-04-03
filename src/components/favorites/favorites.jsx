import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import {getSortedFavorites} from '../../reducer/user/selectors.js';
import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {favoritesShape, PlaceCardType} from '../../const.js';
import Offer from '../offer/offer.jsx';

class Favorites extends PureComponent {
  componentDidMount() {
    const {getFavoriteOffers} = this.props;
    getFavoriteOffers();
  }

  render() {
    const {favorites, handleBookmarkButtonClick, handlePlaceCardNameClick} = this.props;

    const handleButtonClick = (offer) => () => handleBookmarkButtonClick(offer);
    const handleCardNameClick = (offer) => () => handlePlaceCardNameClick(offer);

    return (
      <div className={`page ${!favorites.length ? ` page--favorites-empty` : ``}`}>
        <Header />
        <main className={`page__main page__main--favorites ${!favorites.length ? ` page__main--favorites-empty` : ``}`}>
          <div className="page__favorites-container container">
            {!favorites.length ? (
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            )
              :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favorites.map((it) => {
                    return (
                      <li className="favorites__locations-items" key={it.city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{it.city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {it.offers.map((offer) => (
                            <Offer
                              key={offer.id}
                              offer={offer}
                              placeCardType={PlaceCardType.FAVORITES}
                              handleBookmarkButtonClick={handleButtonClick(offer)}
                              handlePlaceCardNameClick={handleCardNameClick(offer)}
                            />
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            }
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape(favoritesShape).isRequired).isRequired,
  getFavoriteOffers: PropTypes.func.isRequired,
  handleBookmarkButtonClick: PropTypes.func.isRequired,
  handlePlaceCardNameClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: getSortedFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(UserOperation.getFavorites());
  },

  handleBookmarkButtonClick(offer) {
    dispatch(DataOperation.toggleIsFavorite(offer));
    dispatch(UserOperation.getFavorites());
  },

  handlePlaceCardNameClick(offer) {
    dispatch(DataOperation.openDetailedOffer(offer));
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
