import React, { useState, useEffect } from 'react';
import { getAuthors } from '../../methods/getAuthors';
import { getPapersForCurrentAuthor } from '../../methods/getPapersForCurrentAuthor';
import { getType } from '../../methods/getType';

import Card from '../card/card.component';

import './cardlist.styles.css';

const CardList = () => {
    const [cards, setCards] = useState([]);
    useEffect(async () => {
        const newCards = await getPapersForCurrentAuthor();
        setCards(newCards);
    }, [])

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
                cards.map((paper, index) => {
                    const { title, topic, status } = paper;
                    return (
                        <Card isReviewer={isReviewer} key={index} index={index + 1} title={title} topic={topic} status={status ? "Accepted" : "Pending"} />
                    );
                })
            )}
        </div>
    );
}

export default CardList;