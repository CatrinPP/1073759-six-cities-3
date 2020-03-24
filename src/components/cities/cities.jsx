import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cities, cityShape} from '../../const.js';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app.js';
import {getCity} from '../../reducer/app/selectors.js';

const Cities = ({city, handleCityClick}) => {
  const handleCityNameClick = (newCity) => () => handleCityClick(newCity);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((it) => (
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
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(city) {
    dispatch(AppActionCreator.changeCity(city));
  }
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
