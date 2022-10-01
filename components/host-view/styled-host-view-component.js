import styled from 'styled-components';
import HostView from './host-view-component';

export default styled(HostView)`
  .component-host-view__button {
    display: inline-block;
    width: auto;
    margin-top: 16px;
  }

  .component-host-view__cards {
    display: flex;
    justify-content: center;
  }
  
  .component-link{
    padding: 70px;
  }

  .component-host-view__card-wrap {
    padding: 8px;
    text-align: center;
    position: relative;

  .card-list-item {
    margin: 0 0 10px 0;
  }
`;
