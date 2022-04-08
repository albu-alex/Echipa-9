import React from 'react';

import './card.styles.css';

const Card = ({ index, title, topic, status }) => {
    return (
        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>{index}</h2>
                    <h3>{title}</h3>
                    <p>{topic}</p>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;