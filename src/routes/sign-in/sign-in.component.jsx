
import SignUp from '../../components/sign-up-form/sign-up-form.component';
import {signWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebas.utils'

const SignIn = () => {


    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    
  return (
    <div>
        <h1>SignIn Page</h1>
        <button onClick={logGoogleUser}>
            Sign in with Google Popup
        </button>
        <SignUp />
    </div>
  )
}

export default SignIn