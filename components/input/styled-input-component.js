import styled from 'styled-components';
import Input from './input-component';
import Colors from '../../constants/colors';

export default styled(Input)`
  display: flex;
  background: ${Colors.backgroundDark};
  border: none;
  height: 60px;
  color: ${Colors.white};
  padding: 16px;
  width: 100%;
  transition: all 0.3s;
  font-size: 30px;
  padding: 30px;
`;
