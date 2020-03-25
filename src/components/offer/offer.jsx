import React from 'react';
import PropTypes from 'prop-types';
import {offerShape} from '../../const.js';
import {getRatingInPercent} from '../../utils.js';

const Offer = ({handlePlaceCardNameClick, isCitiesClass, offer, onMouseEnter, onMouseLeave}) => {
  const ratingInPercent = getRatingInPercent(offer.rating);

  return (
    <article className={`place-card ${isCitiesClass ? `cities__place-card` : `near-places__card`}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`place-card__image-wrapper ${isCitiesClass ? `cities__image-wrapper` : `near-places__image-wrapper`}`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
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
            <span style={{width: `${ratingInPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"
            onClick={handlePlaceCardNameClick}
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
  handlePlaceCardNameClick: PropTypes.func.isRequired,
  isCitiesClass: PropTypes.bool,
  offer: PropTypes.shape(offerShape).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default Offer;
