import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__logo">
      <h1> Agile Poker </h1>
    </div>
  </div>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};
Header.defaultProps = {};

export default Header;
