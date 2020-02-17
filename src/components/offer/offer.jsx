import React from 'react';
import PropTypes from 'prop-types';
import offerShape from '../../const.js';

const Offer = (props) => {
  const {offer, onMouseEnter, onMouseLeave, onPlaceCardNameClick} = props;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="place-card__mark">
        <span>{offer.isPremium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image"/>
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
            onClick={onPlaceCardNameClick}
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
  offer: PropTypes.shape(offerShape).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onPlaceCardNameClick: PropTypes.func,
};

export default Offer;
