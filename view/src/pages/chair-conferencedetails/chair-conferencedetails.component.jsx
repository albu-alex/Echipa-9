import React, { useState } from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import './chair-conferencedetails.styles.css';

import { saveConferenceData } from '../../methods/saveConferenceData'

const ChairConferenceDetails = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [url, setUrl] = useState("")
    const [topic, setTopic] = useState("")
    const [dlPaperSubmission, setDlPaperSubmission] = useState("")
    const [dlPaperReview, setDlPaperReview] = useState("")
    const [dlPaperAccept, setDlPaperAccept] = useState("")
    const [dlCameraReady, setDlCameraReady] = useState("")

    return (
        <>
            <Header />
            <Sidebar />

            <div className='details'>
                <div class='form-style-5'>
                    <form>
                        <legend>Details</legend>
                        <label>Name</label>
                        <input type="text" name="name-field" placeholder="Text input..." onChange={text => setName(text.target.value)} />
                        <label>Date</label>
                        <input type="text" name="date-field" placeholder="Text input..." onChange={text => setDate(text.target.value)} />
                        <label>URL</label>
                        <input type="text" name="url-field" placeholder="Text input..." onChange={text => setUrl(text.target.value)} />
                        <label>Topics</label>
                        <input type="text" name="topic-field" placeholder="Text input..." onChange={text => setTopic(text.target.value)} />
                    </form>
                </div>

                <div className='deadlines'>
                    <div className='form-style-5'>
                        <form>
                            <legend>Deadlines</legend>
                            <label>Paper submission</label>
                            <input type="text" name="paper submission" placeholder="Date input..." onChange={text => setDlPaperSubmission(text.target.value)} />
                            <label>Paper review</label>
                            <input type="text" name="paper review" placeholder="Date input..." onChange={text => setDlPaperReview(text.target.value)} />
                            <label>Accept papers</label>
                            <input type="text" name="accept paper" placeholder="Date input..." onChange={text => setDlPaperAccept(text.target.value)} />
                            <label>Upload camera-ready copies</label>
                            <input type="text" name="camera-ready copies" placeholder="Date input..." onChange={text => setDlCameraReady(text.target.value)} />
                        </form>
                    </div>
                </div>
            </div>


            <div className='form-style-5'>
                <input type="submit" value="Save" required onClick={() => saveConferenceData(name, date, url, topic, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady)} />
            </div>

        </>


    )
}

export default ChairConferenceDetails;