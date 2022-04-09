import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.css';

const Card = ({ isReviewer, index, title, name, topic, status }) => {
    return (
        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>{index}</h2>    {/* both authors and papers */}
                    <h3>{name}</h3>     {/* authors */}
                    <h3>{title}</h3>    {/* both authors and papers*/}
                    <p>{topic}</p>      {/* papers */}
                    <p>{status}</p>     {/* papers */}
                    {/* <Link to='/asdsad'> */}
                    <div className={`${isReviewer ? 'signal-button' : 'signal-button-hidden'}`}>
                        {/* <div className='signal-button'> */}
                        <button className='signal-hidden'>Signal</button>    {/* authors */}
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Card;