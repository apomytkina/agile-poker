import {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useSocket } from '../../context/socket';
import { useGlobalState } from '../../context/global-state';
import { setRoom, updateRoom } from '../../reducer/actions';
import Layout from '../../components/layout';
import Input from '../../components/input';
import Button from '../../components/button';
import { Select, SelectOption } from '../../components/select';

const Home = ({ className }) => {
  const router = useRouter();
  const socket = useSocket();
  const [listenersReady, setListenersReady] = useState(false);
  const [{ room }, dispatch] = useGlobalState();

  const updateState = useCallback((field, value) => {
    dispatch(updateRoom({ [field]: value }));
  }, [dispatch]);

  const onChangeUserNameInput = ({ target: { value } }) => {
    updateState('host', { name: value });
  };
  const onChangeRoomNameInput = ({ target: { value } }) => {
    updateState('name', value);
  };
  const onChangeCardMode = ({ target: { value } }) => {
    updateState('cardsMode', value);
  };

  const canCreateRoom = useMemo(() => {
    const { name, host, cardsMode } = room;
    return name.length > 0 && host.name.length > 0 && cardsMode.length > 0;
  }, [room]);

  const createRoom = useCallback(() => {
    if (socket && canCreateRoom) {
      socket.emit('createRoom', room);
    }
  }, [socket, room, canCreateRoom]);

  const onRoomCreated = useCallback((createdRoom) => {
    dispatch(setRoom(createdRoom));
    socket.emit('joinRoom', { id: createdRoom.id });
  }, [socket, dispatch]);

  const onJoinedRoom = useCallback(({ id }) => {
    router.push(`/room?id=${id}`);
  }, [router]);

  useEffect(() => {
    if (socket && !listenersReady) {
      socket.on('roomCreated', onRoomCreated);
      socket.on('guestJoined', onJoinedRoom);
      setListenersReady(() => true);
    }
  }, [socket, listenersReady, onRoomCreated, onJoinedRoom]);

  return (
    <div id="component-home" className={`${className} component-home`}>
      <Layout>
        <div className="component-home__content">
          <Input
            className="component-home__input component-home__input__room-name"
            placeholder="Room name"
            onChange={onChangeRoomNameInput}
            value={room.name}
          />
          <Input
            className="component-home__input component-home__input__host-name"
            placeholder="Nickname"
            onChange={onChangeUserNameInput}
            value={room.host ? room.host.name : ''}
          />
          <Select
            placeholder="Vote mode"
            value={room.cardsMode}
            onChange={onChangeCardMode}
          >
            <SelectOption value="">Cards mode</SelectOption>
            <SelectOption value="fibonacci">Classic (1,2,3,5,...)</SelectOption>
            <SelectOption value="simple">Simple (0,1/2,1,...)</SelectOption>
          </Select>
          <Button
            className="component-home__button"
            onClick={createRoom}
            disabled={!canCreateRoom}
          >
            Create room
          </Button>
        </div>
      </Layout>
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

Home.defaultProps = {};

export default Home;
