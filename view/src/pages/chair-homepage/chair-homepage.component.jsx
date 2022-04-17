import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './chair-homepage.styles.css';

const ChairHomePage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='chair-homepage'>
                <div className='buttons-container'>
                    <Link to='/chair-assign-paper'>
                        <button style={{width: '20vw'}} className='bigger'>Assign paper</button>
                    </Link>
                    <Link to='/chair-review-paper'>
                        <button style={{width: '20vw'}} className='bigger'>Review paper</button>
                    </Link>
                    <Link to='/chair-set-topics'>
                        <button style={{width: '20vw'}} className='bigger'>Set topics</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ChairHomePage;