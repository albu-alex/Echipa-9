import React, { useEffect, useState } from 'react';
import { renderMatches } from 'react-router-dom';
import { getPapers } from '../../methods/getPapers';

import ListItem from '../listitem/listitem.component';

import './list.styles.css';

const List = () => {
    const [papers, setPapers] = useState([]);

    useEffect(async () => {
        const newPapers = await getPapers();
        setPapers(newPapers);
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