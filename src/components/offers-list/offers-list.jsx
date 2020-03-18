import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Offer from '../offer/offer.jsx';
import Sorting from '../sorting/sorting.jsx';
import {offerShape, cityShape} from '../../const.js';
import {sortOffers} from '../../utils.js';

const OffersList = ({city, isCitiesClass, offers, sortType}) => {
  const sortedOffers = offers.slice();
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
            <Sorting />
          </React.Fragment>
          :
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
        }
        <div className={`places__list ${isCitiesClass ? `cities__places-list tabs__content` : `near-places__list`}`}>
          {sortedOffers.map((it) => (
            <Offer
              isCitiesClass={isCitiesClass}
              key={it.id}
              offer={it}
            />
          ))}
        </div>
      </section>
    );
};

OffersList.propTypes = {
  city: PropTypes.shape(cityShape).isRequired,
  isCitiesClass: PropTypes.bool,
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  sortType: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
