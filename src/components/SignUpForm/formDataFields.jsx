import FisrstNameIcon from './icons/FisrstNameIcon';
import SecondNameIcon from './icons/SecondNameIcon';
import CountryIcon from './icons/CountryIcon';
import PhoneIcon from './icons/PhoneIcon';
import PasswordIcon from './icons/PasswordIcon';
import ConfirmPasswordIcon from './icons/ConfirmPasswordIcon';
import EmailIcon from './icons/EmailIcon';

export const formDataFields = [
  {
    id: 1,
    name: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    type: 'text',
    icon: <FisrstNameIcon />
  },
  {
    id: 2,
    name: 'secondName',
    label: 'Second Name',
    placeholder: 'Second Name',
    type: 'text',
    icon: <SecondNameIcon />
  },
  {
    isSelect: true,
    id: 3,
    name: 'country',
    label: 'Country',
    placeholder: 'Country',
    type: 'text',
    icon: <CountryIcon />
  },
  {
    id: 4,
    name: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
    type: 'text',
    icon: <PhoneIcon />
  },
  {
    id: 5,
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    icon: <PasswordIcon />
  },
  {
    id: 6,
    name: 'confirmPassword',
    label: 'Confirm password',
    placeholder: 'Confirm password',
    type: 'password',
    icon: <ConfirmPasswordIcon />
  },
  {
    id: 7,
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
    icon: <EmailIcon />
  },
]
