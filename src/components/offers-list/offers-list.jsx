import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.hoverOff = this.hoverOff.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.state = {
      activeOffer: null
    };
  }

  hoverOff() {
    this.setState({
      activeOffer: null
    });
  }

  hoverOn(currentOffer) {
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
              key={it + i}
              offer={offers[i]}
              onMouseEnter={() => this.hoverOn(offers[i])}
              onMouseLeave={this.hoverOff}
              onPlaceCardNameClick={onPlaceCardNameClick}
            />
          ))}
        </div>
      </section>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Bungalow`, `House`, `Room`, `Studio`, `Villa`]).isRequired,
  })).isRequired,
  onPlaceCardNameClick: PropTypes.func,
  placesToStayCount: PropTypes.number.isRequired,
};

export default OffersList;
