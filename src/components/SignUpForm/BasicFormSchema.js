import * as Yup from 'yup';

export const BasicFormSchema = Yup.object().shape({
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
});