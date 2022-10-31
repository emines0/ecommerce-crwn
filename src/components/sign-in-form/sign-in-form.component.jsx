import { useState } from 'react';
import { signWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebas.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.style.scss';

const defaultFormFields= {
    email: '',
    password: '',
}

const SignIn = () => {
    const[formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields =() => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {
            console.log('error',error);

            switch(error.code) {
                case 'auth/wrong-password':
                alert('incorrect password for email');
                break;

                case 'auth/user-not-found':
                alert('no user associated with this email');
                break;

                default: 
                console.log('error');
            }
        }
    }   


    // setting values from event.target
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields( {...formFields, [name]:value})

    }

  return (
    <div className='sign-in-container'>
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

            <FormInput
                label='Email'
                type='email'
                required 
                onChange={handleChange} 
                name='email' 
                value={email}
            />

            <FormInput
                label='Password'
                type='password' 
                required 
                onChange={handleChange} 
                name='password' 
                value={password}
            />

            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type='button' onClick={signInWithGoogle} buttonType='google'>Sign In With Google</Button>
            </div>

        </form>
    </div>
  )
}

export default SignIn