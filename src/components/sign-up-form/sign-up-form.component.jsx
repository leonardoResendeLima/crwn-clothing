import './sign-up-form.styles.scss'

import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

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

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {
            let createdUser = await createAuthUserWithEmailAndPassword(email, password)
            console.log(createdUser)

            const userDocRef = await createUserDocumentFromAuth({ ...createdUser.user, displayName })
            console.log(userDocRef)

            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.error('user creation ecountered an error', error)
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don`t have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    required
                />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />

                <Button type='submit'>Sign Up!</Button>
            </form>
        </div>
    )
}

export default SignUpForm