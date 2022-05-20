import React, { useEffect, useState } from 'react';
import { renderMatches } from 'react-router-dom';
import { getPapers } from '../../methods/getPapers';

import ListItem from '../listitem/listitem.component';

import './list.styles.css';

const List = () => {
    const [papers, setPapers] = useState([]);

    useEffect(() => {
        const authToken = localStorage.getItem('idToken');

        let printPapers = [];
        fetch('/get-papers', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            for (const paper of JSON.parse(data).papers) {
                console.log(paper);
                const _title = paper.title;
                const _authors = [paper.authorName, paper.coAuthor];

                printPapers.push({ id: paper.id, title: _title, authors: _authors, topic: paper.topic, keywords: paper.keywords });
            }
        }).then(() => { setPapers(printPapers) })
    }, [])

    return (
        <ol className="ol-cards">
            {papers && papers.map((paper, index) => {
                const { id, title, authors, topic, keywords } = paper;
                return (
                    <ListItem key={id} id={id} title={title} authors={authors} topic={topic} keywords={keywords} />
                );
            })}
        </ol>
    )
}

export default List;