import React from 'react';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './chair-see-papers.styles.css'
import PresentationCard from "../../components/presentation-card/presentation-card.component";

const Row = () => (
    <PresentationCard />
);

const getItemSize = () => 100 //greater item size - space for paper title & author & status


const ChairSeePapers = () => {

    return (

        <>
            <Header />
            <Sidebar />

            <div className='chair-homepage'>
                <div className='list-container'>
                    <List width={'100%'} height={500} className='list' itemCount={20} itemSize={getItemSize}>
                        {Row}
                    </List>
                </div>
            </div>
        </>
)

}

export default ChairSeePapers;