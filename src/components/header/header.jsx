import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user.js';
import {getAuthorizationStatus, getUserName} from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../const.js';

const Header = ({authorizationStatus, handleSignInLinkClick, userName}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.NO_AUTH && <span className="header__login" onClick={handleSignInLinkClick}>Sign in</span> ||
                  <span className="header__user-name user__name" onClick={handleSignInLinkClick}>{userName}</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  handleSignInLinkClick: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userName: getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSignInLinkClick() {
    dispatch(ActionCreator.openSignInPage(true));
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
