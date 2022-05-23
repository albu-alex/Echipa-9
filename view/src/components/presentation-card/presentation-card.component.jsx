import React, { useState } from 'react';

const PresentationCard = ({ paper }) => {
    return (
        <div className='card-container'>
            {paper.title}, {paper.authors}, {paper.topic}, {paper.keywords}
        </div>
    )
}

export default PresentationCard