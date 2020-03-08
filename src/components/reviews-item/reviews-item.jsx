import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {commentShape} from '../../const.js';
import {getRatingInPercent} from '../../utils.js';

const ReviewsItem = ({comment}) => {
  const ratingInPercent = getRatingInPercent(comment.rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingInPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.text}
        </p>
        <time className="reviews__time" dateTime={moment(comment.date).format(`YYYY-MM-DD`)}>{moment(comment.date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  comment: PropTypes.shape(commentShape).isRequired,
};

export default ReviewsItem;
