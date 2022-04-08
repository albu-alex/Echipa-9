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

    return (
        <div className='cards-container'>
            {dummyCards.map((paper, index) => {
                const { title, topic, status } = paper;
                return (
                    <Card key={index} index={index + 1} title={title} topic={topic} status={status} />
                );
            })}
        </div>
    );
}

export default CardList;