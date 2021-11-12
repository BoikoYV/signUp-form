import styled, { keyframes } from 'styled-components';
import { Form, Field } from 'formik';
import checkedIcon from './checkedIcon.svg';
export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 630px;
  justify-content: space-between;
  grid-gap: 30px;
  align-items: center;
`;

export const StyledSubmitBtn = styled.button`
  background-color:${({ theme }) => theme.colors.accentColor};
  border-radius: 5px;
  color: #000;
  font-size: 19px;
  font-weight: 500;
  padding: 16px 47px;
  font-family: inherit;
  border: none;
`;

export const StyledCheckbox = styled(Field)`
   display: none;
   transition: 0.3s;
   
`;

export const StyledCheckboxLabel = styled.label`
    padding-left: 32px;
    line-height: 21px;
    cursor: pointer;
  & a{
    color: ${({ theme }) => theme.colors.accentColor};
    position: relative;
    text-decoration: none;
  }
  & a::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

const checkboxAppear = keyframes`
  0% { 
    opacity: 0; 
    transform:scale(0.7);
}
  100% { 
    opacity: 1; 
    transform:scale(1);
  }`;

const checkboxDisappear = keyframes`
  0% { 
    opacity: 1; 
    transform:scale(1);
  }
  100% { 
    opacity: 0; 
    transform:scale(0.7);
}`;


export const StyledCheckboxWrapper = styled.div`
  position: relative;
 
  input[type='checkbox'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 3px;
    transition: all .5s, border-color .08s;
}
  input[type='checkbox']:checked + label:before{
    background-color: ${({ theme }) => theme.colors.accentColor};
    transition: background-color 0.3 .0.3s;
  }

 
  input[type='checkbox'] + label:after {
    opacity: 0;
    content: '';
    position: absolute;
    background-image: url(${checkedIcon});
    background-size: contain;
    background-repeat: no-repeat;
    top: 5px;
    left: 5px;
    height: 10px;
    width: 13px;
    animation-name: ${checkboxDisappear};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
    animation-name: ${checkboxAppear};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
}
`;