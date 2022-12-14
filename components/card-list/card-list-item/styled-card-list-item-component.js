import styled from 'styled-components';
import CardListItem from './card-list-item-component';

import Colors from '../../../constants/colors';

export default styled(CardListItem)`
  width: 140px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 300;
  font-size: 50px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${Colors.primaryText};
  border: 5px solid ${Colors.primaryLight};
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;

  &:hover {
    color: #1f754b;
    background-color: ${Colors.backgroundDark};
    border-color: ${Colors.backgroundDarker};
    box-shadow: 0px 10px 20px 10px rgba(0,0,0,.5);

    span {
      color: #1e774c;
    }
  }

  span {
    color: ${Colors.primaryTextDark};
  }

  small {
    font-size: 11px;
    display: flex;
    font-weight: 400;
    text-align: center;
  }

  ${({ error }) => error && `
    background-color: ${Colors.error};
    border-color: ${Colors.errorLight};

    span {
      color: ${Colors.errorText};
    }
  `}

  ${({ disabled }) => disabled && `
    background-color: #898989\t;
    border-color: #4F4F4F;
    pointer-events: none;

    span {
      color: #1d1d27;
    }

    small {
      color: #1d1d28;
    }
  `}

  ${({ revealed, selected }) => (revealed || selected) && `
    background-color: ${Colors.greyLighter};
    border-color: ${Colors.white};
    pointer-events: none;

    &:hover {
      background-color: ${Colors.greyLighter};
      border-color: ${Colors.white};
    }

    span {
      color: ${Colors.greyDarker};
    }
  `}

  ${({ readOnly }) => readOnly && `
    pointer-events: none;
  `}
`;
