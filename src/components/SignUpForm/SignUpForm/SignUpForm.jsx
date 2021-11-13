import React, { useState } from 'react';
import { Formik, FieldArray } from 'formik';
import { formDataFields } from './formDataFields';
import { BasicFormSchema } from '../BasicFormSchema';
import { FormikInputBlock } from '../FieldBlock/FormikInputBlock';
import { StyledForm, StyledSubmitBtn, StyledCheckbox, StyledCheckboxLabel, StyledCheckboxWrapper } from './styles';
import { CountryFieldBlock } from '../CountryFieldBlock/CountryField';
import { NumberFormatInputBlock } from '../NumberFieldBlock/NumberFormatInputBlock';
import { countriesList } from '../countriesList';
import { StyledFieldError } from '../FieldBlock/styles';

export const SignUpForm = () => {
  const [values, setvalues] = useState(null);
  const [currentCountry, setCurrentCountry] = useState('');

  const setCountryHandler = (value) => {
    setCurrentCountry(value);
  }

  const handleFormSubmit = (values) => {
    setvalues(values);
    alert('Successfully submitted')
  }

  let currentNumberFormat;
  if (currentCountry) {
    currentNumberFormat = countriesList.find(item => item.name === currentCountry).dial_code;
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        termsCheckbox: false,
        email: '',
        phone: '',
        country: ''
      }}
      validationSchema={BasicFormSchema}
      onSubmit={handleFormSubmit}>

      {({ isSubmitting }) => (
        <StyledForm>
          <FieldArray name="fields"
            render={() => (
              <>
                {formDataFields.map(({ id, name, label, placeholder, type, icon, isSelect, isPhone }) => {
                  if (isSelect) {
                    return (<CountryFieldBlock key={id}
                      name={name}
                      type={type}
                      label={label}
                      placeholder={placeholder}
                      icon={icon}
                      countryValue={currentCountry}
                      setCountryHandler={setCountryHandler} />)
                  } else if (isPhone) {
                    return (<NumberFormatInputBlock key={id}
                      name={name}
                      type={type}
                      label={label}
                      placeholder={placeholder}
                      icon={icon}
                      countryValue={currentCountry}
                      numberFormat={currentNumberFormat} />)
                  } else {
                    return (<FormikInputBlock key={id}
                      name={name}
                      type={type}
                      label={label}
                      placeholder={placeholder}
                      icon={icon} />)
                  }
                })}
              </>
            )}
          />
          <StyledCheckboxWrapper>
            <StyledCheckbox type="checkbox" id='termsCheckbox' name='termsCheckbox' />
            <StyledCheckboxLabel htmlFor="termsCheckbox">
              I agree to the <a href="#!">Terms & Conditions</a>
            </StyledCheckboxLabel>
            <StyledFieldError component="p" name='termsCheckbox' />
          </StyledCheckboxWrapper>
          <StyledSubmitBtn disabled={isSubmitting} type="submit">Sign Up</StyledSubmitBtn>
        </StyledForm>
      )
      }
    </Formik >
  );
};

