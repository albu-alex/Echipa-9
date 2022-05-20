import React from 'react';
import { Link } from 'react-router-dom';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import PresentationCard from "../../components/presentation-card/presentation-card.component";

import './chair-organize-sessions.styles.css';

const getItemSize = () => 80

const Row = () => (
    <PresentationCard />
);

const ChairOrganizeSessions = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='chair-homepage'>
                <div className='session-list'>
                    <a>
                        Session 1
                    </a>
                    <a>
                        Session 2
                    </a>
                    <a>
                        Session 3
                    </a>
                    <a>
                        Session 4
                    </a>
                </div>
                <div className='list-container'>
                    <List width={'100%'} height={250} className='list' itemCount={200} itemSize={getItemSize}>
                        {Row}
                    </List>
                </div>
                <div className='buttons-container'>
                    <Link to='/chair-assign-paper'>
                        <button style={{width: '20vw'}} className='bigger'>Add presentation</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ChairOrganizeSessions;