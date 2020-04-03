import React from 'react';
import PropTypes from 'prop-types';
import {FavoriteImageSize, offerShape, PlaceCardType} from '../../const.js';
import {getRatingInPercent} from '../../utils.js';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';

const Offer = ({handleBookmarkButtonClick, handlePlaceCardNameClick, placeCardType, offer, onMouseEnter, onMouseLeave}) => {
  const ratingInPercent = getRatingInPercent(offer.rating);

  const getCardClass = () => {
    switch (placeCardType) {
      case PlaceCardType.CITIES:
        return `cities__place-card place-card `;
      case PlaceCardType.NEAR_PLACES:
        return `near-places__card place-card `;
      case PlaceCardType.FAVORITES:
        return `favorites__card place-card `;
      default:
        return `place-card`;
    }
  };

  return (
    <article className={getCardClass()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`place-card__image-wrapper ${placeCardType}__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={placeCardType === PlaceCardType.FAVORITES ? FavoriteImageSize.WIDTH : `260`} height={placeCardType === PlaceCardType.FAVORITES ? FavoriteImageSize.HEIGHT : `200`} alt="Place image"/>
        </a>
      </div>
      <div className={`place-card__info ${placeCardType === PlaceCardType.FAVORITES ? `favorites__card-info` : ``}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`}
            onClick={handleBookmarkButtonClick}
            type="button"
          >
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
          <Link href="#"
            onClick={handlePlaceCardNameClick}
            to={`${AppRoute.OFFER}/${offer.id}`}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  handleBookmarkButtonClick: PropTypes.func.isRequired,
  handlePlaceCardNameClick: PropTypes.func.isRequired,
  placeCardType: PropTypes.string.isRequired,
  offer: PropTypes.shape(offerShape).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Offer;
