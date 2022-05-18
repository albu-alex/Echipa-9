import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import CardList from '../../components/cardlist/cardlist.component';
import Scroll from '../../components/scroll/scroll.component';

import './author-paperspage.styles.css';

const AuthorPapersPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Scroll>
                <CardList />
            </Scroll>
            <div className='button-container'>
                <Link to='/authoraddpaper'>
                    <button className='bigger'>Add paper</button>
                </Link>
            </div>
        </>
    )
}

export default AuthorPapersPage;