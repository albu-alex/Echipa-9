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
                <p>You have 5 papers left to review</p>
                <Link to='/reviewerpapers'>
                    <button className='bigger'>Review Papers</button>
                </Link>
            </div>
        </>
    )
}

export default ReviewerHomePage;