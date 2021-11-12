import * as Yup from 'yup';

export const BasicFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[a-zA-Zа-яА-я]+$/, "First name must contain only letters")
        .min(2, 'To short First Name')
        .max(15, 'Too long first name')
        .required('Required field'),
    secondName: Yup.string()
        .matches(/^[a-zA-Zа-яА-я]+$/, "Last name must contain only letters")
        .min(2, 'Last name must be longer than 2 characters')
        .max(15, 'Too long last name')
        .required('Required field'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required field'),
});