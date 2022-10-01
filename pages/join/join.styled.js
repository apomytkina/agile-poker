import styled from 'styled-components';

import Join from './join.logic';
import Colors from '../../constants/colors';

export default styled(Join)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .component-join__content {
    flex-direction: column;
    width: 45%;
    height: 400px;
    margin: 0 auto;
    margin-top: 14%;
  }
  
  component-host-view__button component-host-view__button--start

  .component-join__input,
  .component-home__button {
    margin-bottom: 15px;
    display: flex;
    background-color: ${Colors.backgroundDark};
  }
`;
