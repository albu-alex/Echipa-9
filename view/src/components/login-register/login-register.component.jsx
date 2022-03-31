import React, {useState} from 'react';
import { useGlobalContext } from '../../context';
import { validateSignIn } from "../../methods/validateSignIn"
import { validateRegister } from "../../methods/validateRegister";

import './login-register.styles.css';

import { signIn, signUp } from '../../auth/authenticate.mjs';

const LoginRegister = () => {
    const { isSignIn, changeToRegister, changeToSignIn } = useGlobalContext();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [type, setType] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div>
            <div className={`${isSignIn ? 'container' : 'right-panel-active container'}`} id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="First Name"
                               onChange={event => setFirstName(event.target.value)}
                               defaultValue={firstName}/>
                        <input type="text" placeholder="Last Name"
                               onChange={event => setLastName(event.target.value)}
                               defaultValue={lastName}/>
                        <input type="text" placeholder="Type (chair, reviewer, author)"
                               onChange={event => setType(event.target.value)}
                               defaultValue={type}/>
                        <input type="email" placeholder="Email"
                               onChange={event => setEmail(event.target.value)}
                               defaultValue={email}/>
                        <input type="password" placeholder="Password"
                               onChange={event => setPassword(event.target.value)}
                               defaultValue={password}/>
                        <input type="password" placeholder="Confirm password"
                               onChange={event => setConfirmPassword(event.target.value)}
                               defaultValue={confirmPassword}/>
                        <button type={"submit"} onClick={(e) =>  {

                                    e.preventDefault();
                                    try {
                                        validateRegister(firstName, lastName, type, email, password, confirmPassword)
                                        signUp(firstName, lastName, type, email, password);
                                    }
                                    catch (error) {
                                        alert(error.message);
                                    }

                                }}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email"
                               onChange={event => setEmail(event.target.value)}
                               defaultValue={email}/>
                        <input type="password" placeholder="Password"
                               onChange={event => setPassword(event.target.value)}
                               defaultValue={password}/>
                        <a href="#">Forgot your password?</a>
                        <button type={"submit"}
                            onClick={(e) => {

                                    e.preventDefault();
                                    try {
                                        validateSignIn(email, password)
                                        signIn(email, password);
                                    }
                                    catch (error) {
                                        alert(error.message);
                                    }

                                }}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>If you already have an account please sign in with your personal info</p>
                            <button className="ghost" id="signIn" onClick={changeToSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello!</h1>
                            <p>Start with creating an account here if you don't have one</p>
                            <button className="ghost" id="signUp" onClick={changeToRegister}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;



/*
    ! Not needed anymore
const callBackendAPI = {
    signIn: async (email, password) => {
        const response = await fetch(`/sign-in?email=${email}&password=${password}`);

        if(response.status !== 200) {
            alert('Login falied!');     // TODO: show a nice message
        }
        else {
            alert('Login successful!') // TODO: redirect to main page
        }
    },
    signUp: async (firstName, lastName, type, email, password) => {
        const response = await fetch(`/sign-up?email=${email}&password=${password}&fname=${firstName}&lname=${lastName}&type=${type}`);

        if(response.status !== 200) {
            alert('Sing Up falied!');     // TODO: show a nice message
        }
        else {
            alert('Sing Up successful!') // TODO: redirect to main page
        }
    }
}
*/