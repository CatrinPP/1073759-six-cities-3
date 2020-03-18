import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import {SortingType} from '../../const.js';

const Sorting = ({handleSortLinkClick}) => {
  const handleLinkClick = (sortType) => () => handleSortLinkClick(sortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active"
          onClick={handleLinkClick(SortingType.DEFAULT)}
          tabIndex="0">Popular</li>
        <li className="places__option"
          onClick={handleLinkClick(SortingType.PRICE_LOW_TO_HIGH)}
          tabIndex="0">Price: low to high</li>
        <li className="places__option"
          onClick={handleLinkClick(SortingType.PRICE_HIGH_TO_LOW)}
          tabIndex="0">Price: high to low</li>
        <li className="places__option"
          onClick={handleLinkClick(SortingType.TOP_RATED)}
          tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  handleSortLinkClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleSortLinkClick(sortType) {
    dispatch(ActionCreator.sortOffers(sortType));
  }
});

export {Sorting};
export default connect(null, mapDispatchToProps)(Sorting);
