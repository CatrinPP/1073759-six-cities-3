import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offersListShape, cityShape} from '../../const.js';
import {ActionCreator} from '../../reducer.js';

const Cities = ({allOffers, city, handleCityClick}) => {
  const offersToShow = allOffers.slice(0, 6);

  const handleCityNameClick = (newCity) => () => handleCityClick(newCity);

  return (
    <ul className="locations__list tabs__list">
      {offersToShow.map((it) => (
        <li className="locations__item"
          key={it.city.name}
        >
          <a className={`locations__item-link tabs__item ${it.city.name === city.name ? `tabs__item--active` : ``}`} href="#"
            onClick={handleCityNameClick(it.city)}
          >
            <span>{it.city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

Cities.propTypes = {
  allOffers: PropTypes.arrayOf(PropTypes.shape(offersListShape)).isRequired,
  city: PropTypes.shape(cityShape).isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allOffers: state.allOffers,
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
