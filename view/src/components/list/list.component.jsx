import React from 'react';

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