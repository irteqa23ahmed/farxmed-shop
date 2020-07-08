import React from 'react';
import './sign-in-up.page.styles.scss';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sigin-up.components';
const SignPage = () => {
    return (
      <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
      </div>  
    );
}

export default SignPage;