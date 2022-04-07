import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './author-homepage.styles.css';

const AuthorHomePage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='author-homepage'>
                <p>Background, maybe with the deadline for paper submission</p>
                <div className='buttons-container'>
                    <Link to='/authoraddpaper'>
                        <button className='bigger'>Add paper</button>
                    </Link>
                    <Link to='/authorpapers'>
                        <button className='bigger'>See papers</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AuthorHomePage;