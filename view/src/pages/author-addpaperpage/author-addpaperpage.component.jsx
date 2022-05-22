import React, { useState, useEffect } from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { getAuthors } from '../../methods/getAuthors';
import { getTopics } from '../../methods/getTopics';
import { submitPaper } from "../../methods/submitPaper";

import './author-addpaperpage.styles.css';

const AuthorAddPaperPage = () => {
    const [topic, setTopic] = useState("");
    const [title, setTitle] = useState("");
    const [coAuthor, setCoAuthor] = useState("");
    const [keywords, setKeywords] = useState("");
    const [resume, setResume] = useState("");
    const changeTopic = (e) => {
        setTopic(e.target.value);
    }
    const changeCoAuthor = (e) => {
        setCoAuthor(e.target.value);
    }

    const [fileName, setFileName] = useState("");

    const handleFile = (e) => {
        setFileName(e.target.files[0].name);
    }

    const [topics, setTopics] = useState([]);
    useEffect(async () => {
        const topics = await getTopics();
        setTopics(topics);
    }, [])

    const [coAuthors, setCoAuthors] = useState([]);
    useEffect(async () => {
        const authors = await getAuthors();
        setCoAuthors(authors);
        console.log(coAuthors);
    }, [])

    return (
        <>
            <Header />
            <Sidebar />
            <div className='add-container'>
                <div className="form-style-5">
                    <form>
                        <legend>Add your paper</legend>
                        <label>Paper Title *</label>
                        <input onChange={text => setTitle(text)} type="text" name="field1" placeholder="required" required />
                        <label htmlFor="topic">Topic *</label>
                        <select value={topic} onChange={changeTopic} id="topic" name="field4">
                            {topics && topics.map((topic, index) => {
                                return (
                                    <option key={index} value={`${topic}`}>{topic}</option>
                                );
                            })}
                        </select>
                        <label htmlFor="co-authors">Co-authors</label>
                        <select value={coAuthor} onChange={changeCoAuthor} id="co-authors" name="field4">
                            {coAuthors && coAuthors.map((coAuthor, index) => {
                                return (
                                    <option key={index} value={`${coAuthor.name}`}>{coAuthor.name}</option>
                                );
                            })}
                        </select>
                        <label>Keywords *</label>
                        <input onChange={text => setKeywords(text)} type="text" name="field2" placeholder="required" required />
                        <label>Abstract</label>
                        <textarea onChange={text => setResume(text)} name="field3" placeholder="Resume your paper"></textarea>
                        <button onClick={(e) => {
                            e.preventDefault();
                            submitPaper(topic, title, coAuthor, keywords, resume);
                            window.location.reload();
                        }}>
                            <p>Submit paper</p>
                        </button>
                    </form>
                </div>
                <div className='upload-paper'>
                    <div className='plus-button-container'>
                        <div className='right-button'>
                            <label htmlFor="file-upload" className="plus-button plus-button--large"></label>
                            <input id="file-upload" type="file" name="paper" onChange={(e) => handleFile(e)} />
                        </div>
                        <br></br>
                        <div className='right-paragraph'>
                            <p>&nbsp;&nbsp; Upload paper (PDF or Word)</p>
                        </div>
                        <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {fileName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorAddPaperPage;