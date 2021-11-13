import React from 'react';
import { useField } from 'formik';
import NumberFormat from "react-number-format";
import PropTypes from 'prop-types';
import { StyledLabel, StyledFieldError } from '../FieldBlock/styles';
import { StyledNumberFieldBlock, StyledNumberField } from './styles';

export const NumberFormatInputBlock = ({ id, name, placeholder, type, label, icon, numberFormat = '' }) => {
  
  const [field] = useField(name);
  return <StyledNumberFieldBlock key={id}>
    {icon}
    <StyledNumberField
      {...field}
      id={id}
      as={NumberFormat}
      format={`${numberFormat} ###########`}
      name={name}
      placeholder={placeholder}
      type={type}
      required
    />
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledFieldError component="p" name={name} />
  </StyledNumberFieldBlock>
}

NumberFormatInputBlock.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node
}

NumberFormatInputBlock.defaultProps = {
  placeholder: '',
  type: 'text',
  id: '',
  icon: ''
}
