import React, { useState } from 'react';
import { Formik, FieldArray } from 'formik';
import { formDataFields } from './formDataFields';
import { BasicFormSchema } from './BasicFormSchema';
import { FormikInputBlock } from './FieldBlock/FormikInputBlock';
import { StyledForm, StyledSubmitBtn, StyledCheckbox, StyledCheckboxLabel, StyledCheckboxWrapper } from './styles';

export const SignUpForm = () => {
  const [setvalues] = useState(null);

  const handleFormSubmit = (values) => {
    setvalues(values);
    console.log(values);
  }
  return (
    <Formik
      initialValues={{
        firstName: '',
        secondName: '',
        email: '',
        termsCheckbox: false,
      }}
      validationSchema={BasicFormSchema}
      onSubmit={handleFormSubmit}>

      {({ isSubmitting }) => (
        <StyledForm >
          <FieldArray name="fields"
            render={() => (
              <>
                {formDataFields.map(({ id, name, label, placeholder, type, icon }) => {
                  return <FormikInputBlock key={id} name={name} type={type} label={label} placeholder={placeholder} icon={icon} />
                })}
              </>
            )}
          />
          <StyledCheckboxWrapper>
            <StyledCheckbox type="checkbox" id='termsCheckbox' name='termsCheckbox' />
            <StyledCheckboxLabel htmlFor="termsCheckbox">
              I agree to the <a href="#!">Terms & Conditions</a>
            </StyledCheckboxLabel>
          </StyledCheckboxWrapper>
          <StyledSubmitBtn disabled={isSubmitting} type="submit">Sign Up</StyledSubmitBtn>
        </StyledForm>
      )
      }
    </Formik >
  );
};

