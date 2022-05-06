import React from 'react';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Scroll from "../../components/scroll/scroll.component";
import CardList from "../../components/cardlist/cardlist.component";
import {Link} from "react-router-dom";


const ChairReviewPaper = () => {
    return (
        <>
            <Header/>
            <Sidebar/>

            <div className='chair-homepage'>

            </div>
        </>
    )
}

export default ChairReviewPaper;