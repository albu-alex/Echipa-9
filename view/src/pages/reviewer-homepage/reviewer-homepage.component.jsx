import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './reviewer-homepage.styles.css';

const ReviewerHomePage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='reviewer-homepage'>
                <p>Background, maybe with the deadline for paper review</p>
                <div className='buttons-container reviewer-homepage-container'>
                    <Link to='/reviewerpapers'>
                        <button className='bigger'>Review Papers</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ReviewerHomePage;