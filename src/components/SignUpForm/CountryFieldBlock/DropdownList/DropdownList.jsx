import React from 'react';
import { countriesList } from './countriesList';
import { StyledCountryList } from './styles';

export const DropdownList = (setCountryHandler, updateValueHandler) => {

  const countriesItems = countriesList.map(({ name, code }) => {
    return <li key={code}>{name}</li>
  })

  // setCountryHandler = (e) => {
  //   console.log(e.target.innerText);
  //   return e.target.innerText;
  // }
  // updateValueHandler = (e) => {
  //   console.log(e);
    // console.log(e.target.innerText);
    // return e.target.innerText;
  // }
  return (
    <StyledCountryList onMouseDown={() => updateValueHandler}>
      {countriesItems}
    </StyledCountryList>
  );
};

