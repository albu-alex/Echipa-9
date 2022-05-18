import React from 'react';

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

    let dummyAuthors = [
        {
            name: 'Daria Andrioaie',
            title: 'Paper 1'
        },
        {
            name: 'Elina Barabas',
            title: 'Paper 2'
        },
        {
            name: 'Teodora Arsene',
            title: 'Paper 3'
        }
    ];

    let isReviewer = false;

    return (
        <div className='cards-container'>
            {isReviewer ? (
                dummyAuthors.map((author, index) => {
                    const { title, name } = author;
                    return (
                        <Card isReviewer={isReviewer} key={index} index={index + 1} title={title} name={name} />
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