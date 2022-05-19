import React from 'react';
import { renderMatches } from 'react-router-dom';
import { getPapers } from '../../methods/getPapers';

import ListItem from '../listitem/listitem.component';

import './list.styles.css';

const List = () => {
    // render reviewers's papers passed in props
    let dummyPapers = [
        {
            title: 'Title 1',
            authors: ['Adam Paul', 'BarabasElina']
        },
        {
            title: 'Title 2',
            authors: ['Adam Paul', 'BarabasElina']
        },
        {
            title: 'Title 3',
            authors: ['Adam Paul', 'BarabasElina']
        },
        {
            title: 'Title 4',
            authors: ['Adam Paul', 'BarabasElina']
        },
        {
            title: 'Title 5',
            authors: ['Adam Paul', 'BarabasElina']
        }
    ];

    // let dummyPapers = await getPapers();

    return (
        <ol class="ol-cards">
            {dummyPapers.map((paper, index) => {
                const { title, authors } = paper;
                return (
                    <ListItem key={index} title={title} authors={authors} />
                );
            })}
        </ol>
    )
}

export default List;