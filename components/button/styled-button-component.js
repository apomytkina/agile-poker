import styled from 'styled-components';
import Button from './button-component';
import Colors from '../../constants/colors';

export default styled(Button)`
  display: flex;
  border: none;
  background: ${Colors.primary};
  font-size: 20px;
  padding: 17px 20px;
  cursor: pointer;
  margin-top: 10px;
  color: ${Colors.white};
  width: 100%;
  height: 15%;
  justify-content: center;

  ${({ disabled }) => disabled && `
    cursor: default;
    pointer-events: none;
    background-color: ${Colors.backgroundLight};

    &:focus {
      box-shadow: none;
    }
  `}
`;
