import React from 'react';
import { VariableSizeList as List } from 'react-window';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Scroll from "../../components/scroll/scroll.component";
import CardList from "../../components/cardlist/cardlist.component";
import {Link} from "react-router-dom";

import './chair-conferencedetails.styles.css';

const ChairConferenceDetails = () => {
    return (
        <>
            <Header/>
            <Sidebar/>

            <div className='details'>
                <div class='form-style-5'>
                    <form>
                        <legend>Details</legend>
                        <label>Name</label>
                        <input type="text" name="name-field" placeholder="Text input..." />
                        <label>Date</label>
                        <input type="text" name="date-field" placeholder="Text input..." />
                        <label>URL</label>
                        <input type="text" name="url-field" placeholder="Text input..." />
                        <label>Topics</label>
                        <select id="topic" name="field4">
                            <option value="health">Health</option>
                            <option value="sports">Sports</option>
                            <option value="history">History</option>
                        </select>
                    </form>
                </div>

                <div className='deadlines'>
                    <div className='form-style-5'>
                        <form>
                            <legend>Deadlines</legend>
                            <label>Paper submission</label>
                            <input type="text" name="paper submission" placeholder="Date input..."/>
                            <label>Paper review</label>
                            <input type="text" name="paper review" placeholder="Date input..."/>
                            <label>Accept papers</label>
                            <input type="text" name="accept paper" placeholder="Date input..."/>
                            <label>Upload camera-ready copies</label>
                            <input type="text" name="camera-ready copies" placeholder="Date input..."/>
                        </form>
                    </div>
                </div>
            </div>


            <div className='form-style-5'>
                <input type="submit" value="Save" required />
            </div>

        </>


    )
}

export default ChairConferenceDetails;