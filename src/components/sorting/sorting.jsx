import React from 'react';
import PropTypes from 'prop-types';
import {sortTypes} from '../../const.js';

const Sorting = ({handleShowUpClick, onClick, isCollapsed, sortType}) => {
  const handleTypeClick = (selectedSortType) => () => onClick(selectedSortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type"
        onClick={handleShowUpClick}
        tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isCollapsed ? `` : `places__options--opened`}`}>
        {sortTypes.map((item) => (
          <li className={`places__option ${item === sortType ? `places__option--active` : ``}`}
            key={item}
            onClick={handleTypeClick(item)}
            tabIndex="0">{item}
          </li>
        ))}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  handleShowUpClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
};

export default Sorting;
