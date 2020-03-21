import React from 'react';
import PropTypes from 'prop-types';
import {sortTypes} from '../../const.js';

const Sorting = ({handleShowUpClick, handleSortTypeClick, isCollapsed, sortType}) => {
  const handleTypeClick = (selectedSortType) => () => handleSortTypeClick(selectedSortType);

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
        {sortTypes.map((it) => (
          <li className={`places__option ${it === sortType ? `places__option--active` : ``}`}
            key={it}
            onClick={handleTypeClick(it)}
            tabIndex="0">{it}
          </li>
        ))}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  handleShowUpClick: PropTypes.func.isRequired,
  handleSortTypeClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
};

export default Sorting;
