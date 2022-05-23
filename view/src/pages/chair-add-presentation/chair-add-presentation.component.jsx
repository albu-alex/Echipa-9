import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/sidebar/sidebar.component";
import Header from "../../components/header/header.component";

import "./chair-add-presentation.styles.css"

import {getPapers} from "../../methods/getPapers";
import PresentationCard from "../../components/presentation-card/presentation-card.component";
import {assignPaper} from "../../methods/assignPaper";

const ChairAddPresentation = (selectedSessionName) => {
    const [papers, setPapers] = useState([])
    const [selectedPaper, setSelectedPaper] = useState({})

    useEffect(async () => {
        const newPapers = await getPapers();
        setPapers(newPapers);
    }, [])

    return(
        <>
            <Header />
            <Sidebar />
            <div className='list-container'>
                {papers && papers.map((paper, index) => {
                    return (
                        <div onClick={() => setSelectedPaper(paper)}>
                            <PresentationCard key={index} paper={paper} />
                        </div>
                    );
                })}
            </div>
            <div className='selected-container'>
                <p>Selected paper is: </p>
                <PresentationCard paper={selectedPaper} />
                <button style={{marginTop: '5vh'}} onClick={() => assignPaper(selectedSessionName, selectedPaper.id)}>
                    Assign paper to the previously selected session
                </button>
            </div>
        </>
    )
}

export default ChairAddPresentation;