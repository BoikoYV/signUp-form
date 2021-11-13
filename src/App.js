import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { StyledWrapper } from './components/Wrapper/styles';
import { StyledTitle } from './components/Title/styles';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { StyledLogo } from './components/Logo/styles';
import logo from './components/Logo/logo.svg'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <a href='#!'>
          <StyledLogo src={logo} />
        </a>
        <StyledTitle>
          <span>Sign Up</span> and find the best place to rest while traveling
        </StyledTitle>
        <SignUpForm />
      </StyledWrapper>
    </ThemeProvider>
  );
};



export default App;