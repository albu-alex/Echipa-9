import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser } from 'react-icons/ai';

import './sidebar.styles.css';

const Sidebar = () => {
    return (
        <div class='sidebar'>
            <nav class="menu" tabindex="0">
                <div class="smartphone-menu-trigger"></div>
                <header class="avatar">
                    <Link to='/updateuserinfo' className='no-decoration'>
                        <AiOutlineUser size={80} />
                    </Link>
                    <h2>*Name from DB*</h2>
                </header>
                <ul>
                    {/* conditional rendering based on who is logged in */}
                    <Link to='/authorpapers' className='no-decoration'>
                        <li class="icon-papers"><span>&nbsp;&nbsp; My papers</span></li>
                    </Link>
                    <Link to='/allauthors' className='no-decoration'>
                        <li class="icon-authors"><span>&nbsp;&nbsp; Authors</span></li>
                    </Link>
                    <Link to='/allreviewers' className='no-decoration'>
                        <li class="icon-reviewers"><span>&nbsp;&nbsp; Reviewers</span></li>
                    </Link>
                    <Link to='/allconferences' className='no-decoration'>
                        <li class="icon-conferences"><span>&nbsp;&nbsp; Conference Sessions</span></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;