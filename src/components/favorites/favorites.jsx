import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import {getSortedFavorites} from '../../reducer/user/selectors.js';
import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {favoritesShape, PlaceCardType, AppRoute} from '../../const.js';
import Offer from '../offer/offer.jsx';
import {Link} from 'react-router-dom';

class Favorites extends PureComponent {
  componentDidMount() {
    const {getFavoriteOffers} = this.props;
    getFavoriteOffers();
  }

  render() {
    const {favorites, handleBookmarkButtonClick} = this.props;

    const handleButtonClick = (offer) => () => handleBookmarkButtonClick(offer);

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
          <Link className="footer__logo-link"
            to={AppRoute.ROOT}
          >
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape(favoritesShape).isRequired),
  getFavoriteOffers: PropTypes.func.isRequired,
  handleBookmarkButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: getSortedFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(UserOperation.getFavorites());
  },

  handleBookmarkButtonClick(offer) {
    dispatch(DataOperation.toggleFavorite(offer));
    dispatch(UserOperation.getFavorites());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
