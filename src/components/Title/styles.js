import styled from 'styled-components';

export const StyledTitle = styled.h2`
  color:#fff;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 55px;
  & span{
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const StyledSignInLink = styled.p`
  color:#fff;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
  
  & a{
    position: relative;
    color: ${({ theme }) => theme.colors.accentColor};
    text-decoration: none;
  };

  & a::before{
    position: absolute;
    bottom: -4px;
    content: '';
    width: 100%;
    height: 1px;
    background-color:${({ theme }) => theme.colors.accentColor};
    transition: 0.3s;
  }
  & a:hover::before {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  };
`;