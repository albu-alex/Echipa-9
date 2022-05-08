import React, {useState} from 'react';

import { AiOutlineUser } from 'react-icons/ai';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './user-updateinfo.styles.css';
import {saveUserData} from "../../methods/saveUserData";

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
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><AiOutlineUser size={150} /><span class="font-weight-bold">*Name from DB*</span><span class="text-black-50">Title_input Organization_input</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Personal info</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" onChange={text => setFirstName(text)} value="" /></div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" onChange={text => setSurname(text)} placeholder="surname" /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" onChange={text => setPhoneNumber(text)} placeholder="enter phone number" value="" /></div>
                                <div class="col-md-12"><label class="labels">Email Address</label><input type="text" class="form-control" onChange={text => setEmail(text)} placeholder="enter email address" value="" /></div>
                                <div class="col-md-12"><label class="labels">Webpage</label><input type="text" class="form-control" onChange={text => setWebpage(text)} placeholder="enter webpage" value="" /></div>
                                <div class="col-md-12"><label class="labels">Topics of expertise</label><input type="text" class="form-control" onChange={text => setTopics(text)} placeholder="enter topics" value="" /></div>
                            </div>
                            <div class="text-center left-pad">
                                <button class="btn btn-primary profile-button width-size" type="button" onClick={() => saveUserData(firstName, surname, phoneNumber, email, webpage, topics)}>
                                Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex justify-content-between align-items-center mb-3 pt-5">
                            <h4 class="text-right">About me</h4>
                        </div>
                        <div class="">
                            <textarea id="textarea" name="textarea" rows="10" cols="35"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserUpdateInfoPage;