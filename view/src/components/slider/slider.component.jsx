import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import './slider.styles.css';

const Slider = ({ comments, index, indexChanger }) => {
    return (
        <div className='section-center'>
            {comments.map((comment, commentIndex) => {
                let position = 'nextSlide';
                if (commentIndex === index) {
                    position = 'activeSlide';
                }
                if (commentIndex === index - 1 || (index === 0 && commentIndex === comments.length - 1)) {
                    position = 'lastSlide';
                }
                return (
                    <article className={position} key={commentIndex}>
                        <h4>Anonymous</h4>
                        <p className='text'>{comment}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                );
            })}
            <button className='prev' onClick={() => indexChanger(index - 1)}> <FiChevronLeft /> </button>
            <button className='next' onClick={() => indexChanger(index + 1)}> <FiChevronRight /> </button>
        </div>
    );
}

export default Slider;