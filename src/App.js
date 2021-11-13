import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { StyledWrapper, StyledCenteredContainer } from './components/Wrapper/styles';
import { StyledTitle, StyledSignInLink } from './components/Title/styles';
import { SignUpForm } from './components/SignUpForm/SignUpForm/SignUpForm';
import { StyledLogo } from './components/Logo/styles';
import logo from './components/Logo/logo.svg'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCenteredContainer>
        <StyledWrapper>
          <a href='#!'>
            <StyledLogo src={logo} />
          </a>
          <StyledTitle>
            <span>Sign Up</span> and find the best place to rest while traveling
          </StyledTitle>
          <SignUpForm />
        </StyledWrapper>
        <StyledSignInLink>
          If you have an account, <a href="#!">Log In</a>
        </StyledSignInLink>
      </StyledCenteredContainer>
    </ThemeProvider>
  );
};



export default App;