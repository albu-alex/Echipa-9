import React from 'react';

import { AiOutlineUser } from 'react-icons/ai';

import './sidebar.styles.css';

const Sidebar = () => {
    return (
        <div class='sidebar'>
            <nav class="menu" tabindex="0">
                <div class="smartphone-menu-trigger"></div>
                <header class="avatar">
                    <AiOutlineUser size={80} />
                    <h2>*Name from DB*</h2>
                </header>
                <ul>
                    {/* conditional rendering based on who is logged in */}
                    <li class="icon-papers"><span>&nbsp;&nbsp; My papers</span></li>
                    <li class="icon-authors"><span>&nbsp;&nbsp; Authors</span></li>
                    <li class="icon-reviewers"><span>&nbsp;&nbsp; Reviewers</span></li>
                    <li class="icon-conferences"><span>&nbsp;&nbsp; Conference Sessions</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;