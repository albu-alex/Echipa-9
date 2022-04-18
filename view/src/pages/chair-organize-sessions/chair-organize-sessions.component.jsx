import React from 'react';
import { Link } from 'react-router-dom';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './chair-organize-sessions.styles.css';

const rowHeights = new Array(1000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize = index => rowHeights[index];

const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
);

const ChairOrganizeSessions = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='chair-homepage'>
                <List height={150} itemCount={1000} itemSize={getItemSize} width={300}>
                    {Row}
                </List>
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