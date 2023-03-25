import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const signInWithGoogle = async () => {
        const { user, operationType, providerId } = await signInWithGooglePopup()
        const userDocRef = createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page!</h1>

            <button onClick={signInWithGoogle}>
                Google Sign In
            </button>
        </div>
    )
}

export default SignIn