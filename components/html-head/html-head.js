
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function HtmlHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

HtmlHead.propTypes = {
  title: PropTypes.string,
};

HtmlHead.defaultProps = {
  title: 'Agile Poker',
};
