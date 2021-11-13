import styled from 'styled-components';
import { labelShiftUp } from '../../../animation';
import { StyledField } from '../FieldBlock/styles';

export const StyledCountryFieldBlock = styled.div`
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
  input:focus ~ ul{
    display: block;
    opacity: 1;

  }
`;

export const StyledCountryField = styled(StyledField)`
  
`;