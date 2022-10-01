import { css } from 'styled-components';

import Colors from '../../constants/colors';

const headerStyles = () => css`
  display: flex;
  padding: 50px 24px;
  height: 10%;
  background-color: ${Colors.background};
  margin-bottom: 24px;
  mergin-left: 30%

  .header__logo {
    display: flex;
    color: ${Colors.primaryText};
    text-decoration: none;
    width: 500px;
  }
`;

export default headerStyles;
