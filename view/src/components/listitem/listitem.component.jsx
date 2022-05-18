import React from 'react';
import { Link } from 'react-router-dom';

import './listitem.styles.css';

const ListItem = ({ title, authors }) => {

    const displayAuthors = (authors) => {
        let authorsString = authors.map((author) => author + ', ');
        // console.log(authorsString.replace(/,(\s+)?$/, ''));

        // return authorsString.replace(/,(\s+)?$/, '');
        return authorsString;
    }

    return (
        <li className='list-item'>
            <Link to='/itwillbepaperid'>
                <button className='button-hidden'>Review</button>
            </Link>
            <div class="title">{title}</div>
            {/* <div class="descr">{authors.map((author) => author + ',')}</div> */}
            <div class="descr">{displayAuthors(authors)}</div>
        </li>
    )
}

export default ListItem;