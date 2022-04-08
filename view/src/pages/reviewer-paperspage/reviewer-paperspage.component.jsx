import React from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Scroll from '../../components/scroll/scroll.component';
import List from '../../components/list/list.component';

import './reviewer-paperspage.styles.css';

const ReviewerPapersPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Scroll>
                <List />
            </Scroll>

        </>
    )
}

export default ReviewerPapersPage;