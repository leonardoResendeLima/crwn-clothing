import './sign-in-form.styles.scss'

import { useState } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //         const userDocRef = createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(event)

        try {
            const response = await signInUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        } catch (ex) {

            switch (ex.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password')
                    break
                case 'auth/user-not-found':
                    alert('User not found')
                    break
                default:
                    console.log(ex)
                    break
            }
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    required
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In!</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Sign In with Google
                    </Button>
                </div>

                {/* <button onClick={signInWithGoogleRedirect}>
                    Google Sign In - Redirect
                </button> */}
            </form>
        </div>
    )
}

export default SignInForm