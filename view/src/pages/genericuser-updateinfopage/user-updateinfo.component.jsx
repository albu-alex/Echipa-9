import React, { useState } from 'react';

import { AiOutlineUser } from 'react-icons/ai';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './user-updateinfo.styles.css';
import { saveUserData } from "../../methods/saveUserData";

const UserUpdateInfoPage = () => {
    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [webpage, setWebpage] = useState("")
    const [topics, setTopics] = useState("")

    return (
        <>
            <Header />
            <Sidebar />
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><AiOutlineUser size={150} /><span className="font-weight-bold">{localStorage["name"]}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Personal info</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" onChange={text => setFirstName(text.target.value)} /></div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" onChange={text => setSurname(text.target.value)} placeholder="surname" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" onChange={text => setPhoneNumber(text.target.value)} placeholder="enter phone number" /></div>
                                {/* <div className="col-md-12"><label className="labels">Email Address</label><input type="text" className="form-control" onChange={text => setEmail(text.target.value)} placeholder="enter email address" /></div> */}
                                <div className="col-md-12"><label className="labels">Webpage</label><input type="text" className="form-control" onChange={text => setWebpage(text.target.value)} placeholder="enter webpage" /></div>
                                <div className="col-md-12"><label className="labels">Topics of expertise</label><input type="text" className="form-control" onChange={text => setTopics(text.target.value)} placeholder="enter topics" /></div>
                            </div>
                            <div className="text-center left-pad">
                                <button className="btn btn-primary profile-button width-size" type="button" onClick={() => saveUserData(firstName, surname, phoneNumber, webpage, topics)}>
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-between align-items-center mb-3 pt-5">
                            <h4 className="text-right">About me</h4>
                        </div>
                        <div className="">
                            <textarea style={{resize: 'none'}} id="textarea" name="textarea" rows="10" cols="35" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserUpdateInfoPage;


//  <div class="row mt-2">
// <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" onChange={text => setFirstName(text)} value="" /></div>
// <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" onChange={text => setSurname(text)} placeholder="surname" /></div>
// </div>
// <div class="row mt-3">
// <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" onChange={text => setPhoneNumber(text)} placeholder="enter phone number" value="" /></div>
// <div class="col-md-12"><label class="labels">Email Address</label><input type="text" class="form-control" onChange={text => setEmail(text)} placeholder="enter email address" value="" /></div>
// <div class="col-md-12"><label class="labels">Webpage</label><input type="text" class="form-control" onChange={text => setWebpage(text)} placeholder="enter webpage" value="" /></div>
// <div class="col-md-12"><label class="labels">Topics of expertise</label><input type="text" class="form-control" onChange={text => setTopics(text)} placeholder="enter topics" value="" /></div>
// </div>
