import PropTypes from 'prop-types';

import Header from '../header';

export default function Layout({ children, className }) {
  return (
    <div className={className}>
      <Header />
      <div className="layout__container">
        <main>{children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  children: () => null,
};
