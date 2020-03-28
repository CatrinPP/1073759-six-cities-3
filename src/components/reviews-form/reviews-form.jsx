import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH} from '../../const.js';

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.commentRef = createRef();

    this.rating = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleTextareaInput = this.handleTextareaInput.bind(this);

    this.state = {
      isCommentFilled: false,
      isRatingSet: false,
      isSubmitButtonBlocked: true,
    };
  }

  clearForm() {
    document.querySelector(`.reviews__form`).reset();
  }

  componentDidUpdate(prevProps) {
    const {isRatingSet, isCommentFilled} = this.state;
    const {isReviewFormBlocked} = this.props;
    if (prevProps.isReviewFormBlocked === true && isReviewFormBlocked === false) {
      this.clearForm();
    }

    if (isCommentFilled && isRatingSet) {
      this.setState({
        isSubmitButtonBlocked: false,
      });
    } else {
      this.setState({
        isSubmitButtonBlocked: true,
      });
    }
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      comment: this.commentRef.current.value,
      rating: this.rating,
    });
  }

  handleInputClick(evt) {
    this.rating = evt.target.value;

    this.setState({
      isRatingSet: true
    });
  }

  handleTextareaInput(evt) {
    evt.preventDefault();
    const commentLength = evt.target.textLength;
    if (commentLength >= MIN_COMMENT_LENGTH && commentLength <= MAX_COMMENT_LENGTH) {
      this.setState({
        isCommentFilled: true
      });
    } else {
      this.setState({
        isCommentFilled: false
      });
    }
  }

  render() {
    const {isSubmitButtonBlocked} = this.state;
    const {isReviewFormBlocked} = this.props;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <fieldset disabled={isReviewFormBlocked === true} style={{border: `none`}}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
              onClick={this.handleInputClick}
            />
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
              onClick={this.handleInputClick}
            />
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
              onClick={this.handleInputClick}
            />
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
              onClick={this.handleInputClick}
            />
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
              onClick={this.handleInputClick}
            />
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" maxLength={MAX_COMMENT_LENGTH} minLength={MIN_COMMENT_LENGTH} name="review" onChange={this.handleTextareaInput} placeholder="Tell how was your stay, what you like and what can be improved"
            ref={this.commentRef}
          ></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonBlocked === true}>Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isReviewFormBlocked: PropTypes.bool.isRequired,
};

export default ReviewsForm;
