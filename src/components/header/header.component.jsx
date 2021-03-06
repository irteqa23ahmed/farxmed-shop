import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.styles.scss';
import { ReactComponent as Logo } from '../../assets/farxmed.svg';
import {auth} from '../firebase/firebase.utils.js';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
        <Link to='/' className='logo-container'>
        <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/' className='option'>CONTACT</Link>
        {
            currentUser ? 
            (<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>)
            :
            (<Link className='option' to='/sign'>SIGN IN</Link>)
        }
        </div>
        </div>
    );
}

export default Header;