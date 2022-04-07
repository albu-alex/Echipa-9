import React from 'react';

import Logo from '../../assets/logo.jpg';
import './header.styles.css';

const Header = () => {
    return (
        <div class='header'>
            <img src={Logo} alt='Logo' width='180em' />
        </div>
    )
}

export default Header;