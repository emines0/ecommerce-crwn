
import { signWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebas.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    
  return (
    <div>
        <h1>SignIn Page</h1>
        <button onClick={logGoogleUser}>
            Sign in with Google Popup
        </button>
    </div>
  )
}

export default SignIn