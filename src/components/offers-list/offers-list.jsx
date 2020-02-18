import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';
import {offerShape} from '../../const.js';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceCardHoverOff = this.handlePlaceCardHoverOff.bind(this);
    this.handlePlaceCardHoverOn = this.handlePlaceCardHoverOn.bind(this);
    this.state = {
      activeOffer: null
    };
  }

  handlePlaceCardHoverOff() {
    this.setState({
      activeOffer: null
    });
  }

  handlePlaceCardHoverOn(currentOffer) {
    this.setState({
      activeOffer: currentOffer
    });
  }

  render() {
    const {offers, onPlaceCardNameClick, placesToStayCount} = this.props;

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesToStayCount} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by &nbsp;</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((it, i) => (
            <Offer
              key={it.id}
              offer={offers[i]}
              onMouseEnter={() => this.handlePlaceCardHoverOn(offers[i])}
              onMouseLeave={this.handlePlaceCardHoverOff}
              onPlaceCardNameClick={onPlaceCardNameClick}
            />
          ))}
        </div>
      </section>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  onPlaceCardNameClick: PropTypes.func,
  placesToStayCount: PropTypes.number.isRequired,
};

export default OffersList;
