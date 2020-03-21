import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {citiesList, cityShape} from '../../utils.js';
import {ActionCreator} from '../../reducer.js';

const Cities = ({city, handleCityClick}) => {
  const handleCityNameClick = (newCity) => () => handleCityClick(newCity);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((it) => (
        <li className="locations__item"
          key={it.name}
        >
          <a className={`locations__item-link tabs__item ${it.name === city.name ? `tabs__item--active` : ``}`} href="#"
            onClick={handleCityNameClick(it)}
          >
            <span>{it.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

Cities.propTypes = {
  city: PropTypes.shape(cityShape).isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
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
