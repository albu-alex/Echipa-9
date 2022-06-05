import React from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import CardList from '../../components/cardlist/cardlist.component';
import Scroll from '../../components/scroll/scroll.component';

import './reviewer-authorspage.styles.css';

const ReviewerAuthorsPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='please-paragraph'>
                <p><b>Please</b> signal to us if you have any relation with one of the authors:</p>
            </div>
            <Scroll>
                <CardList />
            </Scroll>
        </>
    )
}

export default ReviewerAuthorsPage;