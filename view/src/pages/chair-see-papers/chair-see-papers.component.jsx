import React, { useEffect, useState } from 'react';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './chair-see-papers.styles.css'
import PresentationCard from "../../components/presentation-card/presentation-card.component";
import { getPapers } from "../../methods/getPapers";

const ChairSeePapers = () => {
    const [papers, setPapers] = useState([]);

    useEffect(async () => {
        const newPapers = await getPapers();
        setPapers(newPapers);
    }, [])

    return (

        <>
            <Header />
            <Sidebar />

            <div className='chair-homepage'>
                <div className='paper-list-container'>
                    {papers && papers.map((paper, index) => {
                        return (
                            <PresentationCard key={index} paper={paper} />
                        );
                    })}
                </div>
            </div>
        </>
    )

}

export default ChairSeePapers;