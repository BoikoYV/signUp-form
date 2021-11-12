import styled, { keyframes } from 'styled-components';
import { Field, ErrorMessage } from 'formik';

const labelShiftUp = keyframes`
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

const labelShiftDown = keyframes`
 0% { 
    opacity: 1; 
    top: 15px;
    font-size: 11px;
  }
  100% { 
    opacity: 0; 
    font-size: 19px;
    top: 22px;
}`;

export const StyledFieldBlock = styled.div`
  position: relative;
  width: 100%;

  & svg{
    width: 24px;
    height: 24px;
    position: absolute;
    left: 15px;
    top: 15px;
  }
  & path{
    fill: ${({ theme }) => theme.colors.accentColor};
  }

  input:focus ~ label{
    z-index: 1;
    color: ${({ theme }) => theme.colors.accentColor};
    animation-name: ${labelShiftUp};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;

export const StyledField = styled(Field)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.mainTextColor};
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  padding: 16px;
  padding-left: 50px;
  font-family: inherit;
  font-weight: inherit;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: 19px;

  &::placeholder{
    font-family: inherit;
    color: ${({ theme }) => theme.colors.mainTextColor};
  
  }

  &:focus{
    border: 1px solid;
    border-color:${({ theme }) => theme.colors.accentColor};
    outline: none;
    background: rgba(0, 0, 0, 0.4);
    padding-top: 22px;
    padding-bottom: 10px;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 22px;
  left: 50px;
  transition: 0.3s;
  animation-name: ${labelShiftDown};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;

export const StyledFieldError = styled(ErrorMessage)`
  transition: 0.3s;
  color: #e31212;
  position: absolute;
  bottom: -22px;
  left: 0;
`;