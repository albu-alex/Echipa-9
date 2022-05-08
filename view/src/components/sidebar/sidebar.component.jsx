import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { getEmail } from "../../methods/getEmail";

import './sidebar.styles.css';

const Sidebar = () => {
    const email = getEmail()
    return (
        <div class='sidebar'>
            <nav class="menu" tabindex="0">
                <header class="avatar">
                    <Link to='/updateuserinfo' className='no-decoration'>
                        <AiOutlineUser size={80} />
                    </Link>
                    <h2>{email}</h2>
                </header>
                <ul>
                    {/* conditional rendering based on who is logged in */}

                    {/* author */}
                    <Link to='/authorpapers' className='no-decoration'>
                        <li class="icon-papers"><span>&nbsp;&nbsp; My papers</span></li>
                    </Link>
                    {/* reviewer */}
                    <Link to='/reviewerpapers' className='no-decoration'>
                        <li class="icon-papers"><span>&nbsp;&nbsp; Papers</span></li>
                    </Link>
                    {/* reviewer */}
                    <Link to='/allauthors' className='no-decoration'>
                        <li class="icon-authors"><span>&nbsp;&nbsp; Authors</span></li>
                    </Link>
                    {/* chair */}
                    <Link to='/chair-organize-sessions' className='no-decoration'>
                        <li class="icon-conferences"><span>&nbsp;&nbsp; Conference Sessions</span></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;