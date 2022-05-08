import React from 'react';
import { AiOutlineUser } from "react-icons/ai";

import Sidebar from "../../components/sidebar/sidebar.component";
import Header from "../../components/header/header.component";

import './update-user-info.styles.css';

export default function UpdateUserInfo() {
    const email = localStorage.getItem('email')
    const role = localStorage.getItem('role')
    return(
        <div className='container'>
            <Sidebar />
            <Header />
            <div className='user-header'>
                <AiOutlineUser style={{marginTop: '5vh'}} size={80} />
                <div className='header-details'>
                    <p>{email}</p>
                    <p>{role}</p>
                </div>
            </div>
            <div className='content'>
                <div className='personal'>
                    <p className='primaryText' style={{fontSize: '1.5rem'}}>Personal info</p>
                    <p className='primaryText'>Phone number</p>
                    <p className='primaryText'>Website</p>
                    <p className='primaryText'>Topics of expertise</p>
                </div>
                <div className='about-me'>
                    <p className='primaryText' style={{fontSize: '1.5rem'}}>About me</p>
                    <textarea />
                    <button style={{width: '15vw', marginTop: '5vh'}}>Save</button>
                </div>
            </div>
        </div>
    )
}