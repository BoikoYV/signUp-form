import PropTypes from 'prop-types';
import { StyledFieldBlock, StyledField, StyledLabel, StyledFieldError } from './styles';

export const FormikInputBlock = ({ id, name, placeholder, type, label, icon }) => {
  return (
    <StyledFieldBlock key={id}>
      {icon}
      <StyledField key={id} name={name} placeholder={placeholder} type={type} autoComplete="on" required />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledFieldError component="p" name={name} />
    </StyledFieldBlock>)
}

FormikInputBlock.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node
};

FormikInputBlock.defaultProps = {
  placeholder: '',
  type: 'text',
  id: '',
  icon: ''
};