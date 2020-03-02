import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offerShape} from '../../const.js';
import {ActionCreator} from '../../reducer.js';
import allOffers from '../../mocks/offers.js';

class Cities extends PureComponent {
  render() {
    const {city, handleCityClick} = this.props;
    const offersToShow = allOffers.slice(0, 6);

    return (
      <ul className="locations__list tabs__list">
        {offersToShow.map((it) => (
          <li className="locations__item"
            key={it.city.name}
          >
            <a className={`locations__item-link tabs__item ${(it.city.name === city.name) && `tabs__item--active`} href="#"`}
              onClick={() => handleCityClick(it.city)}
            >
              <span>{it.city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

Cities.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)),
  city: PropTypes.object,
  handleCityClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
