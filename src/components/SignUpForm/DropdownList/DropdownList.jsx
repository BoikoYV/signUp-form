import React from 'react';
import { countriesList } from '../countriesList';
import { StyledCountryList } from './styles';

export const DropdownList = ({ updateValueHandler }) => {

  const countriesItems = countriesList.map(({ name, code }) => {
    return <li key={code}>{name}</li>
  })

  const getValue = (e) => {
    updateValueHandler(e.target.innerText)
  }
  return (
    <StyledCountryList onMouseDown={getValue}>
      {countriesItems}
    </StyledCountryList>
  );
};

