import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import PresentationCard from "../../components/presentation-card/presentation-card.component";

import './chair-organize-sessions.styles.css';
import { getSessions } from "../../methods/getSessions";
import { saveSession } from "../../methods/saveSession";
import { getPapers } from "../../methods/getPapers";

const ChairOrganizeSessions = () => {

    const [sessions, setSessions] = useState([])
    const [sessionName, setSessionName] = useState("")
    const [papers, setPapers] = useState([])
    const [selectedSession, setSelectedSession] = useState({})

    useEffect(async () => {
        const sessionList = await getSessions()
        setSessions(sessionList)
    }, [])

    useEffect(async () => {
        const newPapers = await getPapers();
        setPapers(newPapers);
    }, [])

    return (
        <>
            <Header />
            <Sidebar />
            <div className='chair-homepage'>
                <div className='session-list'>
                    {sessions && sessions.map((session, index) => {
                        return(
                        <a style={selectedSession.name === session.name ? {color: 'black', opacity: 1} : {color: 'gray'}}
                           onClick={() => setSelectedSession(session)} key={index}>{session.name}</a>
                        )
                    })}
                </div>
                <div className='list-container'>
                    {selectedSession.papers && selectedSession.papers.map((paperID, index) => {
                        let renderedPaper = {}
                        for(let i=0;i<papers.length;i++) {
                            if(papers[i].id === paperID) {
                                renderedPaper = papers[i]
                            }
                        }
                        return (
                            <PresentationCard key={index} paper={renderedPaper} />
                        );
                    })}
                </div>
                <div className='buttons-container'>
                    <Link to='/chair-assign-paper'>
                        <button style={{ width: '20vw' }} className='bigger'>Add presentation</button>
                    </Link>
                </div>
                <div className='add-session'>
                    <Link to='#'>
                        <input type="text" placeholder="Session name" onChange={(event) => setSessionName(event.target.value)} />
                        <button onClick={() => saveSession(sessionName)} style={{ width: '20vw' }} className='bigger'>Add session</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ChairOrganizeSessions;