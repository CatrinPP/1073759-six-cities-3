import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import {commentShape, MAX_COMMENTS_VALUE} from '../../const.js';

const ReviewsList = ({commentsList}) => {
  commentsList.sort((a, b) => moment(b.date) - moment(a.date));
  const commentsToShow = commentsList.slice(0, MAX_COMMENTS_VALUE);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsList.length}</span></h2>
      <ul className="reviews__list">
        {commentsToShow.map((it) => (
          <ReviewsItem
            comment={it}
            key={it.id}
          />
        )
        )}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.shape(commentShape).isRequired).isRequired,
};

export default ReviewsList;
