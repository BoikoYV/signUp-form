import styled from 'styled-components';

export const StyledCountryList = styled.ul`
  height: 160px;
  overflow: scroll;
  opacity: 0;
  display: none;
  transition: 0.3s;
  position: absolute;
  color: #5e5e5e;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;
  list-style: none;
  line-height: 18px;

  & li{
    cursor: pointer;
    transition: 0.3s;
  }

  & li:not(:last-child){
    padding-bottom: 15px;
  }

  & li:hover{
    color: #212121;
    padding-left: 10px;
  }
`;