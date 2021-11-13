import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { labelShiftUp, labelShiftDown } from '../../../styles/animation';

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

  input:focus ~ label, input:required:valid ~ label{
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
  transition: border-color 0.3s;
  &::placeholder{
    font-family: inherit;
    color: ${({ theme }) => theme.colors.mainTextColor};
  }
  &:focus,  &:required:valid{
    border: 1px solid;
    border-color:${({ theme }) => theme.colors.accentColor};
    outline: none;
    background: rgba(0, 0, 0, 0.4);
    padding-top: 21px;
    padding-bottom: 11px;
  }
  &:required:valid{
    border: 1px solid ${({ theme }) => theme.colors.mainTextColor};
  }
  &:required:valid:hover{
    border-color:${({ theme }) => theme.colors.accentColor};
  }
  &:hover{
    border-color:${({ theme }) => theme.colors.accentColor};
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