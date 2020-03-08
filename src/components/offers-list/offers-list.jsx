import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Offer from '../offer/offer.jsx';
import Sorting from '../sorting/sorting.jsx';
import {offerShape, cityShape} from '../../const.js';
import {ActionCreator} from '../../reducer.js';

class OffersList extends PureComponent {
  render() {
    const {offers, city, handlePlaceCardHover, onPlaceCardNameClick} = this.props;

    const handleCardNameClick = (newOffer) => () => onPlaceCardNameClick(newOffer);

    return !offers.length ?
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
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((it) => (
              <Offer
                key={it.id}
                offer={it}
                onMouseEnter={() => handlePlaceCardHover(it)}
                onMouseLeave={() => handlePlaceCardHover(null)}
                onPlaceCardNameClick={handleCardNameClick(it)}
              />
            ))}
          </div>
        </section>
      );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  city: PropTypes.shape(cityShape).isRequired,
  onPlaceCardNameClick: PropTypes.func.isRequired,
  handlePlaceCardHover: PropTypes.func.isRequired,
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
