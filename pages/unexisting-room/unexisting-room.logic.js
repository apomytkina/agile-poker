import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { initialState } from '../../reducer';
import { useGlobalState } from '../../context/global-state';
import HtmlHead from '../../components/html-head';
import { setRoom } from '../../reducer/actions';
import Layout from '../../components/layout';

const UnexistingRoom = ({ className }) => {
  const [{ room }, dispatch] = useGlobalState();

  useEffect(() => {
    if (room.id !== null) {
      dispatch(setRoom(initialState.room));
    }
  }, [dispatch, room.id]);

  return (
    <div id="component-unexisting-room" className={className}>
      <Layout>
        <HtmlHead title="Agile poker - error room" />
        <div className="component-unexisting-room__content">
          <h1>Unexisting room</h1>
          <p>
            <Link href="/">Create a new room</Link>
          </p>
        </div>
      </Layout>
    </div>
  );
};

UnexistingRoom.propTypes = {
  className: PropTypes.string.isRequired,
};

UnexistingRoom.defaultProps = {};

export default UnexistingRoom;
