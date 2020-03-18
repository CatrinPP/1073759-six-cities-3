import React from 'react';
import PropTypes from 'prop-types';
import {offerShape} from '../../const.js';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const Offer = ({handlePlaceCardHover, handlePlaceCardNameClick, isCitiesClass, offer}) => {
  const handleCardNameClick = (newOffer) => () => handlePlaceCardNameClick(newOffer);
  const handleCardHover = (newOffer) => () => handlePlaceCardHover(newOffer);

  return (
    <article className={`place-card ${isCitiesClass ? `cities__place-card` : `near-places__card`}`}
      onMouseEnter={handleCardHover(offer)}
      onMouseLeave={handleCardHover(null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`place-card__image-wrapper ${isCitiesClass ? `cities__image-wrapper` : `near-places__image-wrapper`}`}>
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"
            onClick={handleCardNameClick(offer)}
          >
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  handlePlaceCardHover: PropTypes.func,
  handlePlaceCardNameClick: PropTypes.func,
  isCitiesClass: PropTypes.bool,
  offer: PropTypes.shape(offerShape).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handlePlaceCardHover(offer) {
    dispatch(ActionCreator.changeCardOnHover(offer));
  },

  handlePlaceCardNameClick(offer) {
    dispatch(ActionCreator.openDetailedOffer(offer));
  }
});

export {Offer};
export default connect(null, mapDispatchToProps)(Offer);
