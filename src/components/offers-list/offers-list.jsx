import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app.js';
import {Operation} from '../../reducer/data/data.js';
import Offer from '../offer/offer.jsx';
import Sorting from '../sorting/sorting.jsx';
import {offerShape, cityShape} from '../../const.js';
import {sortOffers} from '../../utils.js';
import withShowControl from '../../hocs/with-show-control/with-show-control.js';
import {getSortType} from '../../reducer/app/selectors.js';

const OffersList = ({city, handleBookmarkButtonClick, handlePlaceCardHover, handleSortTypeClick, isCitiesClass, offers, placeCardType, sortType}) => {
  const sortedOffers = JSON.parse(JSON.stringify(offers));
  const SortingWrapped = withShowControl(Sorting);

  const handleButtonClick = (offer) => () => handleBookmarkButtonClick(offer);
  const handleCardHover = (offer) => () => handlePlaceCardHover(offer);

  sortOffers(sortType, sortedOffers, offers);
  return !sortedOffers.length ?
    (
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {city.name}</p>
        </div>
      </section>
    ) :
    (
      <section className={`places ${isCitiesClass ? `cities__places` : `near-places`}`}>
        {isCitiesClass ?
          <React.Fragment>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in {city.name}</b>
            <SortingWrapped
              onClick={handleSortTypeClick}
              sortType={sortType}
            />
          </React.Fragment>
          :
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
        }
        <div className={`places__list ${isCitiesClass ? `cities__places-list tabs__content` : `near-places__list`}`}>
          {sortedOffers.map((item) => (
            <Offer
              placeCardType={placeCardType}
              key={item.id}
              offer={item}
              handleBookmarkButtonClick={handleButtonClick(item)}
              onMouseEnter={handleCardHover(item)}
              onMouseLeave={handleCardHover(null)}
            />
          ))}
        </div>
      </section>
    );
};

OffersList.propTypes = {
  city: PropTypes.shape(cityShape).isRequired,
  handleBookmarkButtonClick: PropTypes.func.isRequired,
  handlePlaceCardHover: PropTypes.func.isRequired,
  handleSortTypeClick: PropTypes.func.isRequired,
  isCitiesClass: PropTypes.bool,
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  placeCardType: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleBookmarkButtonClick(offer) {
    dispatch(Operation.toggleFavorite(offer));
    dispatch(Operation.loadOffers());
  },

  handlePlaceCardHover(offer) {
    dispatch(ActionCreator.changeCardOnHover(offer));
  },

  handleSortTypeClick(selectedSortType) {
    dispatch(ActionCreator.sortOffers(selectedSortType));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
