import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../cutom-button/custom-button.components';
import { signInWithGoogle } from '../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className = 'sign-in'>
            
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span> 
            
            <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange}  label='Email' required />
            <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
            <div className='buttons'>
            <CustomButton type='submit'>{' '}SIGN IN{' '}</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>{' '}SIGN IN WITH GOOGLE{' '}</CustomButton>
            </div>
            </form>
            </div>
        );
    }
}

export default SignIn;

