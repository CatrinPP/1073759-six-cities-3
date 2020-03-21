import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {sortTypes} from '../../const.js';

export default class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
    };
  }

  render() {
    const {handleSortTypeClick, sortType} = this.props;
    const handleTypeClick = (selectedSortType) => () => handleSortTypeClick(selectedSortType);

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by &nbsp;</span>
        <span className="places__sorting-type"
          onClick={() => {
            this.setState({isCollapsed: !this.state.isCollapsed});
          }}
          tabIndex="0">
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isCollapsed ? `` : `places__options--opened`}`}>
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
  }
}

Sorting.propTypes = {
  handleSortTypeClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};
