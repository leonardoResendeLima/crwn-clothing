import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //         const userDocRef = createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    const logInWithGooglePopUp = async () => {
        const { user, operationType, providerId } = await signInWithGooglePopup()
        const userDocRef = createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page!</h1>

            <button onClick={logInWithGooglePopUp}>
                Google Sign In
            </button>

            {/* <button onClick={signInWithGoogleRedirect}>
                Google Sign In - Redirect
            </button> */}

            <SignUpForm />
        </div>
    )
}

export default SignIn