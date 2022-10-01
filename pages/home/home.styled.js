import { css } from 'styled-components';
import Colors from '../../constants/colors';

const homeStyles = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .component-home__content {
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 400px;
    margin: 0 auto;
    margin-top: 7%;
  }

  .component-home__input,
  .component-home__button {
    margin-bottom: 15px;
    display: flex;
    background-color: ${Colors.backgroundDark};
  }
`;

export default homeStyles;
