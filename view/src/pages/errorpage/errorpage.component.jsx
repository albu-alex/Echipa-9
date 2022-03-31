import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../assets/404.png';

import './errorpage.styles.css';

const ErrorPage = () => {
    return (
        <div className='errorpage-container'>
            <img src={Picture} alt='Oops. The page does not exist.' width='500em' />
            <Link to='/login' className='errorpage-button'>
                <button>
                    Back to login
                </button>
            </Link>
        </div >
    )
}

export default ErrorPage;