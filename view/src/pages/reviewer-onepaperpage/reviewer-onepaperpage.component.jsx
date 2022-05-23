import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Slider from '../../components/slider/slider.component';

import { IoMdArrowBack } from 'react-icons/io';

import people from './people';
import { sendReview } from "../../methods/sendReview";
import { sendComment } from "../../methods/sendComment";

import './reviewer-onepaperpage.styles.css';
import { getPaperLink } from '../../methods/getPaperLink';
import {getPaperComments} from "../../methods/getPaperComments";

const ReviewerOnePaperPage = () => {
    const [index, setIndex] = useState(0);
    const [review, setReview] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([])
    const [id, setId] = useState("")
    const [paperLink, setPaperLink] = useState("");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const title = urlParams.get('title');
    const authors = urlParams.get('authors');
    const topic = urlParams.get('topic');
    const keywords = urlParams.get('keywords');

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);   // !!! mandatory
    }, [index])

    const handleSubmit = () => {
        setReview("");
        setComment("");
    }

    useEffect(async () => {
        const link = await getPaperLink();
        setPaperLink(link);
    }, []);

    useEffect(async () => {
        setId(window.location.href.split("=")[1].split("&")[0])
        const paperComments = await getPaperComments('CA27L3UTamWyZ4K2AKpa')
        setComments(paperComments)
    }, [])

    return (
        <>
            <Header />
            <Sidebar />
            <div className='paper-button-container'>
                <Link to='/reviewerpapers' className='no-decoration-arrow'>
                    <IoMdArrowBack size={35} className='back-arrow' />
                </Link>
            </div>

            <div className='flex-container'>
                <div className="form__group field">
                    <input type="input" className="form__field" value={title} readOnly={'readOnly'} />
                    <input type="input" className="form__field" value={topic} readOnly={'readOnly'} />
                    <input type="input" className="form__field" value={authors} readOnly={'readOnly'} />
                    <input type="input" className="form__field" value={keywords} readOnly={'readOnly'} />
                </div>

                <div className='upload-paper show-paper'>
                    <div className='plus-button-container'>
                        <div className='right-paragraph'>
                            <p>Paper in PDF format</p>
                            <div style={{ paddingTop: '5em' }}>
                                <a href={paperLink} target='_blank' rel='noreferrer' className='link'>PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-container'>
                <div className="input">
                    <input onChange={(event) => setReview(event.target.value)} type="text" id="input-a" value={review} />
                    <label htmlFor="input-a">Write review...</label>
                </div>
                <div>
                    <button className='bigger right-placed' onClick={() => { sendReview(review); handleSubmit() }}>Submit</button>
                </div>
            </div>

            <div className='slider-container'>
                <Slider people={people} index={index} indexChanger={setIndex} />
            </div>

            <div className='flex-container'>
                <div className="input" style={{ paddingBottom: '10px' }}>
                    <input type="text" id="input-b" onChange={(event) => setComment(event.target.value)} value={comment} />
                    <label htmlFor="input-b">Write comment...</label>
                </div>
                <div className='slider-container'>
                {comments && comments.map((comment) => {
                    return(
                        <p>{comment}</p>
                    )
                })}
                </div>
                <div>
                    <button className='bigger right-placed' onClick={() => { sendComment(comment); handleSubmit() }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ReviewerOnePaperPage;