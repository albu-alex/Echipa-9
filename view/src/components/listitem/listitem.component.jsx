import React from 'react';
import { Link } from 'react-router-dom';

import './listitem.styles.css';

const ListItem = ({ id, title, authors, topic, keywords }) => {

    const displayAuthors = (authors) => {
        let authorsString = authors.map((author) => author + ', ');
        return authorsString;
    }

    return (
        <li className='list-item'>
            <Link to={`/reviewspaper?id=${id}&title=${title}&authors=${authors}&topic=${topic}&keywords=${keywords}`}>
                <button className='button-hidden'>Review</button>
            </Link>
            <div className="title">{title}</div>
            <div className="descr">{displayAuthors(authors)}</div>
        </li>
    )
}

export default ListItem;