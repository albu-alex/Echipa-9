import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { getEmail } from "../../methods/getEmail";
import { getType } from "../../methods/getType";
import { logout } from "../../methods/logout";

import './sidebar.styles.css';

const Sidebar = () => {
    const email = getEmail()
    const type = getType()

    return (
        <div className='sidebar'>
            <nav className="menu" tabIndex="0">
                <header className="avatar">
                    <Link to='/updateuserinfo' className='no-decoration'>
                        <AiOutlineUser size={80} />
                    </Link>
                    <h2 className='smaller-h2'>{email}</h2>
                </header>
                <ul>
                    {type === "author" &&              /* author */
                        <Link to='/authorpapers' className='no-decoration'>
                            <li className="icon-papers"><span>&nbsp;&nbsp; My papers</span></li>
                        </Link>
                    }
                    {type === "reviewer" &&            /* reviewer */
                        <Link to='/reviewerpapers' className='no-decoration'>
                            <li className="icon-papers"><span>&nbsp;&nbsp; Papers</span></li>
                        </Link>
                    }
                    {type === "reviewer" &&            /* reviewer */
                        <Link to='/allauthors' className='no-decoration'>
                            <li className="icon-authors"><span>&nbsp;&nbsp; Authors</span></li>
                        </Link>
                    }
                    {type === "chair" &&               /* chair */
                        <Link to='/chair-organize-sessions' className='no-decoration'>
                            <li className="icon-conferences"><span>&nbsp;&nbsp; Conference Sessions</span></li>
                        </Link>
                    }
                    {type === "chair" &&               /* chair */
                        <Link to='/chair-conferencedetails' className='no-decoration'>
                            <li className="icon-papers"><span>&nbsp;&nbsp; Conference Details</span></li>
                        </Link>
                    }
                    <Link to='/login' className='no-decoration'>
                        <button className='logout-button' onClick={logout}>Log Out</button>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;