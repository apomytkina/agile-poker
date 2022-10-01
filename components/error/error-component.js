import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { httpErrors } from '../../constants/api';
import Layout from '../layout';
import HtmlHead from '../html-head';

const ErrorComponent = ({ className, code }) => {
  const title = useMemo(() => {
    if (code === httpErrors.notFound) {
      return 'The requested page does not exist.';
    }
    return 'An unexpected error has occurred.';
  }, [code]);

  return (
    <div id="component-error" className={className}>
      <Layout>
        <HtmlHead title="Agile poker" />
        <h1>{title}</h1>
        <p>
          <Link href="/">Create a new room</Link>
        </p>
      </Layout>
    </div>
  );
};

ErrorComponent.propTypes = {
  className: PropTypes.string,
  code: PropTypes.oneOf(Object.values(httpErrors)),
};

ErrorComponent.defaultProps = {
  className: '',
  code: httpErrors.internalError,
};

export default ErrorComponent;
