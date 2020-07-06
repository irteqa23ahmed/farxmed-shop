import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.styles.scss';
import { ReactComponent as Logo } from '../../assets/farxmed.svg';

const Header = () => {
    return (
        <div className='header'>
        <Link to='/' className='logo-container'>
        <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/sign' className='option'>CONTACT</Link>
        </div>
        </div>
    );
}

export default Header;