import React, {useEffect, useState} from 'react';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './chair-see-papers.styles.css'
import PresentationCard from "../../components/presentation-card/presentation-card.component";
import {getPapers} from "../../methods/getPapers";

const Row = () => (
    <PresentationCard />
);

const getItemSize = () => 100 //greater item size - space for paper title & author & status


const ChairSeePapers = () => {
    const [papers, setPapers] = useState([])
    // useEffect(async() => {
    //      const newPapers = await getPapers()
    //     setPapers(newPapers)
    // }, [papers])

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