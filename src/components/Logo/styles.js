import styled from 'styled-components';
import SVG from "react-inlinesvg";

export const StyledLogo = styled(SVG)`
  width: 190px;
  height: 48px;
  margin-bottom: 30px;
  & path {
    fill: ${({ theme }) => theme.colors.secondaryColor};
    transition: 0.3s;
  }
  &:hover path{
    transition: 0.3s;
    fill: ${({ theme }) => theme.colors.accentColor};
  }
`;

