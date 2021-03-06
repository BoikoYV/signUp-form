import styled from 'styled-components';
import { StyledField } from '../FieldBlock/styles';
import { labelShiftUp } from '../../../styles/animation';

export const StyledNumberFieldBlock = styled.div`
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

//  const StyledNumberFieldEl = styled(NumberFormat)``;
 export const StyledNumberField = styled(StyledField)``;