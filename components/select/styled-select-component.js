import styled from 'styled-components';
import Select from './select-component';
import Colors from '../../constants/colors';

export default styled(Select)`
  display: flex;
  border: none;
  box-shadow: none;
  background: ${Colors.backgroundDark};
  border: none;
  height: 60px;
  margin-bottom: 16px;
  color: ${Colors.white};
  width: 100%;
  cursor: pointer;
  height: 75px;
  font-size: 25px;
  padding: 20px;

`;
