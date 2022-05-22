import React, { useState, useEffect } from 'react';
import { getAuthors } from '../../methods/getAuthors';
import { getType } from '../../methods/getType';

import Card from '../card/card.component';

import './cardlist.styles.css';

const CardList = () => {
    // render author's cards passed in props
    let dummyCards = [
        {
            title: 'Title 1',
            topic: 'Topic 1',
            status: 'Pending'
        },
        {
            title: 'Title 2',
            topic: 'Topic 2',
            status: 'Pending'
        },
        {
            title: 'Title 3',
            topic: 'Topic 3',
            status: 'Accepted'
        },
        {
            title: 'Title 4',
            topic: 'Topic 4',
            status: 'Accepted'
        },
        {
            title: 'Title 5',
            topic: 'Topic 5',
            status: 'Accepted'
        }
    ];

    const [authors, setAuthors] = useState([]);
    useEffect(async () => {
        const newAuthors = await getAuthors();
        setAuthors(newAuthors);
    }, [])

    let isReviewer = getType();

    return (
        <div className='cards-container'>
            {isReviewer === 'reviewer' ? (
                authors.map((author, index) => {
                    const { email, name } = author;
                    return (
                        <Card isReviewer={isReviewer} key={index} index={index + 1} title={email} name={name} />
                    );
                })
            ) : (
                dummyCards.map((paper, index) => {
                    const { title, topic, status } = paper;
                    return (
                        <Card isReviewer={isReviewer} key={index} index={index + 1} title={title} topic={topic} status={status} />
                    );
                })
            )}
        </div>
    );
}

export default CardList;