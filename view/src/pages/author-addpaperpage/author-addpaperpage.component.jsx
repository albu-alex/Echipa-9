import React, { useState } from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { submitPaper } from "../../methods/submitPaper";

import './author-addpaperpage.styles.css';

const AuthorAddPaperPage = () => {
    const [topic, setTopic] = useState("")
    const [title, setTitle] = useState("")
    const [coAuthor, setCoAuthor] = useState("")
    const [keywords, setKeywords] = useState("")
    const [resume, setResume] = useState("")
    const changeTopic = (e) => {
        setTopic(e.target.value);
    }
    const changeCoAuthor = (e) => {
        setCoAuthor(e.target.value)
    }
    return (
        <>
            <Header />
            <Sidebar />
            <div className='add-container'>
                <div class="form-style-5">
                    <form>
                        <legend>Add your paper</legend>
                        <label>Paper Title *</label>
                        <input onChange={text => setTitle(text)} type="text" name="field1" placeholder="required" required />
                        <label for="topic">Topic *</label>
                        <select value={topic} onChange={changeTopic} id="topic" name="field4">
                            <option value="sports">Sports</option>
                            <option value="history">History</option>
                            <option value="health">Health</option>
                            <option value="more">More to come...</option>
                        </select>
                        <label for="co-authors">Co-authors</label>
                        <select value={coAuthor} onChange={changeCoAuthor} id="co-authors" name="field4">
                            <option value="name1">Adam Paul</option>
                            <option value="name2">Albu Alex</option>
                            <option value="name3">Andrioaie Daria</option>
                            <option value="more">More to come...</option>
                        </select>
                        <label>Keywords *</label>
                        <input onChange={text => setKeywords(text)} type="text" name="field2" placeholder="required" required />
                        <label>Abstract</label>
                        <textarea onChange={text => setResume(text)} name="field3" placeholder="Resume your paper"></textarea>
                        <button onClick={() => submitPaper(topic, title, coAuthor, keywords, resume)}>
                            <p>Submit paper</p>
                        </button>
                    </form>
                </div>
                <div className='upload-paper'>
                    <div className='plus-button-container'>
                        <div className='right-button'>
                            <label for="file-upload" class="plus-button plus-button--large"></label>
                            <input id="file-upload" type="file" />
                        </div>
                        <br></br>
                        <div className='right-paragraph'>
                            <p>&nbsp;&nbsp; Upload paper (PDF or Word)</p>
                        </div>
                        <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;   Label with file name here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorAddPaperPage;