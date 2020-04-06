import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import {offerShape, MAP_SIZE_DETAILED_OFFER, MAX_OFFERS_NEARBY, commentShape, AuthorizationStatus, PlaceCardType} from '../../const.js';
import {getRatingInPercent, extend} from '../../utils.js';
import {getCommentsList, getOffersNearby, getAllOffersTransformed} from '../../reducer/data/selectors.js';
import Header from '../header/header.jsx';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import ReviewsForm from '../reviews-form/reviews-form.jsx';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import withBlockStatus from '../../hocs/with-block-status/with-block-status.js';

const DetailedOffer = ({authorizationStatus, commentsList, handleBookmarkButtonClick, id, offers, offersNearby, sendComment}) => {
  const offersNearbyToShow = offersNearby.slice(0, MAX_OFFERS_NEARBY);
  const ReviewsFormWrapped = withBlockStatus(ReviewsForm);
  const getOfferById = () => {
    return offers.find((item) => item.id === id);
  };
  const offer = getOfferById();
  const city = extend(offer.city);
  const ratingInPercent = getRatingInPercent(offer.rating);
  const handleButtonClick = () => handleBookmarkButtonClick(offer);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((item, i) => (
                <div className="property__image-wrapper" key={offer.id + item + i}>
                  <img className="property__image" src={item} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={`property__bookmark-button button ${offer.isFavorite ? `property__bookmark-button--active` : ``}`}
                  onClick={handleButtonClick}
                  type="button">
                  <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingInPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms === 1 ? `1 Bedroom` : `${offer.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {offer.guests === 1 ? `Max 1 adult` : `Max ${offer.guests} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.features.map((item, i) => (
                    <li className="property__inside-item" key={offer.id + item + i}>
                      {offer.features[i]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.isStar && `property__avatar-wrapper--pro`}`}>
                    <img className="property__avatar user__avatar" src={`/${offer.host.avatar}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList
                  commentsList={commentsList}
                />
                {authorizationStatus === AuthorizationStatus.AUTH &&
                <ReviewsFormWrapped
                  onSubmit={sendComment}
                />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={city}
              currentOffer={offer}
              isBlockedZoom={true}
              mapWidth={MAP_SIZE_DETAILED_OFFER}
              offers={offersNearbyToShow}
            />
          </section>
        </section>
        <div className="container">
          <OffersList
            city={city}
            offers={offersNearbyToShow}
            placeCardType={PlaceCardType.NEAR_PLACES}
          />
        </div>
      </main>
    </div>
  );
};

DetailedOffer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  commentsList: PropTypes.arrayOf(PropTypes.shape(commentShape)),
  handleBookmarkButtonClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape(offerShape)),
  sendComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  commentsList: getCommentsList(state),
  offers: getAllOffersTransformed(state),
  offersNearby: getOffersNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(formData, blockForm, onError) {
    dispatch(UserOperation.sendComment(formData, blockForm, onError));
  },

  handleBookmarkButtonClick(offer) {
    dispatch(DataOperation.toggleFavorite(offer));
  },
});

export {DetailedOffer};
export default connect(mapStateToProps, mapDispatchToProps)(DetailedOffer);
