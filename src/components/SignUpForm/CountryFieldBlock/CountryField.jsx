import React, { useState, useRef } from 'react';
import { StyledCountryFieldBlock, StyledCountryField } from './styles';
import { StyledLabel, StyledFieldError } from '../FieldBlock/styles';
import { DropdownList } from './DropdownList/DropdownList';

export const CountryFieldBlock = ({ id, name, placeholder, type, label, icon, setCountryHandler }) => {

  const [countryValue, setCountryValue] = useState('');
  const inputEl = useRef();

  const updateValueHandler = (e) => {
    console.log(e.target.innerText);
    setCountryValue(e.target.innerText);
    inputEl.current.value = e.target.innerText;
  }
  return (
    <StyledCountryFieldBlock>
      {icon}
      <StyledCountryField innerRef={inputEl} key={id} name={name} placeholder={placeholder} type={type} required readOnly />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <DropdownList updateValueHandler={updateValueHandler} setCountryHandler={setCountryHandler} />
      <StyledFieldError component="p" name={name} />
    </StyledCountryFieldBlock>
  );
};

