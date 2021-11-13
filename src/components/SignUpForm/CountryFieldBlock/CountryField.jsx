import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledCountryFieldBlock, StyledCountryField } from './styles';
import { StyledLabel, StyledFieldError } from '../FieldBlock/styles';
import { DropdownList } from '../DropdownList/DropdownList';

export const CountryFieldBlock = ({ id, name, placeholder, type, label, icon, setCountryHandler }) => {
  
  const [countryValue, setCountryValue] = useState('');
  const inputEl = useRef();

  const updateValueHandler = (value) => {
    setCountryValue(value);
    setCountryHandler(value)
  }

  return (
    <StyledCountryFieldBlock>
      {icon}
      <StyledCountryField value={countryValue} innerRef={inputEl} key={id} name={name} placeholder={placeholder} type={type} required />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <DropdownList updateValueHandler={updateValueHandler} />
      <StyledFieldError component="p" name={name} />
    </StyledCountryFieldBlock>
  );
};

CountryFieldBlock.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  setCountryHandler: PropTypes.func.isRequired
}

CountryFieldBlock.defaultProps = {
  placeholder: '',
  type: 'text',
  id: '',
  icon: ''
}