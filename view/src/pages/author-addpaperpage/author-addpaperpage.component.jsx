import React from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './author-addpaperpage.styles.css';

const AuthorAddPaperPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='add-container'>
                <div class="form-style-5">
                    <form>
                        <legend>Add your paper</legend>
                        <label>Paper Title *</label>
                        <input type="text" name="field1" placeholder="required" required />
                        <label for="topic">Topic *</label>
                        <select id="topic" name="field4">
                            <option value="sports">Sports</option>
                            <option value="history">History</option>
                            <option value="health">Health</option>
                            <option value="more">More to come...</option>
                        </select>
                        <label for="co-authors">Co-authors</label>
                        <select id="co-authors" name="field4">
                            <option value="name1">Adam Paul</option>
                            <option value="name2">Albu Alex</option>
                            <option value="name3">Andrioaie Daria</option>
                            <option value="more">More to come...</option>
                        </select>
                        <label>Keywords *</label>
                        <input type="text" name="field2" placeholder="required" required />
                        <label>Abstract</label>
                        <textarea name="field3" placeholder="Resume your paper"></textarea>
                        <input type="submit" value="Submit Paper" required />
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