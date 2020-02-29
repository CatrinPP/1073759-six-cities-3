import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offersListShape} from '../../const.js';

class Cities extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCity: props.offers[0].city,
    };
  }

  handleCityClick(city) {
    const onCityClick = () => {
      this.setState({
        currentCity: city
      });
    };
    return onCityClick;
  }

  render() {
    const {offers} = this.props;
    const {currentCity} = this.state;
    const offersToShow = offers.slice(0, 6);
    return (
      <ul className="locations__list tabs__list">
        {offersToShow.map((it) => (
          <li className="locations__item"
            key={it.city}
          >
            <a className={`locations__item-link tabs__item ${(it.city === currentCity) && `tabs__item--active`} href="#"`}
              onClick={this.handleCityClick(it.city)}
            >
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
