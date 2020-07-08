import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../cutom-button/custom-button.components';
import {auth, createUserProfileDocument} from '../firebase/firebase.utils.js';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Paswords dont match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {displayName});
            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            });
        }
        catch(error){
            console.log(error)
        }

    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className = 'sign-up'>
            
            <h2>I do not have an account</h2>
            <span>sign up with email and password</span> 
            
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput name='displayName' type='text' value={this.state.displayName} handleChange={this.handleChange}  label='Display Name' required />
            <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange}  label='Email' required />
            <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
            <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword} handleChange={this.handleChange} label='Confirm Password' required />
            <div className='buttons'>
            <CustomButton type='submit'>{' '}SIGN UP{' '}</CustomButton>
            </div>
            </form>
            </div>
        );
    }
}

export default SignUp;

