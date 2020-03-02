import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Offer from '../offer/offer.jsx';
import {offerShape} from '../../const.js';
import {ActionCreator} from '../../reducer.js';

class OffersList extends PureComponent {
  render() {
    const {offers, city, handlePlaceCardHover, onPlaceCardNameClick} = this.props;

    return !offers ?
      (
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property availbale at the moment in {city.name}</p>
          </div>
        </section>
      ) :
      (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by &nbsp;</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((it) => (
              <Offer
                key={it.id}
                offer={it}
                onMouseEnter={() => handlePlaceCardHover(it)}
                onMouseLeave={() => handlePlaceCardHover(null)}
                onPlaceCardNameClick={() => onPlaceCardNameClick(it)}
              />
            ))}
          </div>
        </section>
      );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)),
  city: PropTypes.object,
  onPlaceCardNameClick: PropTypes.func,
  handlePlaceCardHover: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceCardHover(offer) {
    dispatch(ActionCreator.changeCardOnHover(offer));
  },

  onPlaceCardNameClick(offer) {
    dispatch(ActionCreator.openDetailedOffer(offer));
  }
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
