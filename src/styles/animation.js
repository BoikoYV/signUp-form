import { keyframes } from 'styled-components';

export const labelShiftUp = keyframes`
  0% { 
    opacity: 0; 
    font-size: 19px;
    top: 22px;
  }
  100% { 
    opacity: 1; 
    font-size: 11px;
    top: 10px;
  }`;

export const labelShiftDown = keyframes`
 0% { 
    opacity: 1; 
    top: 10px;
    font-size: 11px;
  }
  100% { 
    opacity: 0; 
    font-size: 19px;
    top: 22px;
}`;
