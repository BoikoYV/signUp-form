import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  
`;

export const StyledCenteredContainer = styled.div`
  position:relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before{
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.65) 100%), 
      url('/images/bg-cover.jpg');
    background-size: cover;
    filter:blur(5px);
  }
`;
