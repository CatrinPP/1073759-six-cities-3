import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offersListShape} from '../../const.js';

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;
    const offersToSHow = offers.slice(0, 6);
    return (
      <ul className="locations__list tabs__list">
        {offersToSHow.map((it) => (
          <li className="locations__item"
            key={it.city}
          >
            <a className={`locations__item-link tabs__item ${(it.city === offersToSHow[0].city) && `tabs__item--active`} href="#"`}>
              <span>{it.city}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

Cities.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersListShape)).isRequired,
};

export default Cities;
