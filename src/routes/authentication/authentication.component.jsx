import SignUp from '../../components/sign-up-form/sign-up-form.component';
import { useState } from 'react';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import './authentication.style.scss';


const defaultFormFields = {
  email: '',
  password: '',
}

const Authentication = () => {

  const[formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;
    
  return (
    <div className='authentication-container'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Authentication