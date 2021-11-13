import * as Yup from 'yup';

export const BasicFormSchema = Yup
  .object().shape({
    firstName: Yup.string()
      .matches(/^[a-zA-Zа-яА-я]+$/, "First name must contain only letters")
      .min(2, 'To short First Name')
      .max(15, 'Too long First name')
      .required('Required field'),
    secondName: Yup.string()
      .matches(/^[a-zA-Zа-яА-я]+$/, "Last name must contain only letters")
      .min(2, 'To short Second Name')
      .max(15, 'Too long Second name')
      .required('Required field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required field'),
    phone: Yup.string()
      .min(6, 'To short number')
      .required('Required field'),
    password: Yup.string()
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required field'),
    termsCheckbox: Yup.boolean()
      .required()
      .oneOf([true], 'Accept Terms & Conditions is required')
  })

