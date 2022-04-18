import React from 'react';
import { Link } from 'react-router-dom';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import PresentationCard from "../../components/presentation-card/presentation-card.component";

import './chair-organize-sessions.styles.css';

const rowHeights = new Array(1000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize = index => rowHeights[index];

const Row = ({ style }) => (
    <div style={style}><PresentationCard /></div>
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
                    <List width={'100%'} height={250} className='list' itemCount={1000} itemSize={getItemSize}>
                        {Row}
                    </List>
                </div>
                <div className='buttons-container'>
                    <Link to='/chair-assign-paper'>
                        <button style={{width: '20vw'}} className='bigger'>See papers</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ChairOrganizeSessions;