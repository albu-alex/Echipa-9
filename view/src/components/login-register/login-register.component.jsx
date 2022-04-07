import React, { useState } from 'react';
import { useGlobalContext } from '../../context';

import { signIn, signUp } from '../../auth/authenticate.mjs';

import './login-register.styles.css';

// Test email
// test@test.test -> test123!


const LoginRegister = (props) => {
    const { isSignIn, changeToRegister, changeToSignIn } = useGlobalContext();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [type, setType] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const resetState = () => {
        setPassword("")
        setEmail("")
        setFirstName("")
        setLastName("")
        setType("")
        setConfirmPassword("")
    }

    return (
        <div class='login-register'>
            <div className={`${isSignIn ? 'container' : 'right-panel-active container'}`} id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="First Name"
                            onChange={event => setFirstName(event.target.value)}
                            defaultValue={firstName} value={firstName} />
                        <input type="text" placeholder="Last Name"
                            onChange={event => setLastName(event.target.value)}
                            defaultValue={lastName} value={lastName} />
                        <input type="text" placeholder="Type (chair, reviewer, author)"
                            onChange={event => setType(event.target.value)}
                            defaultValue={type} value={type} />
                        <input type="email" placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                            defaultValue={email} value={email} />
                        <input type="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                            defaultValue={password} value={password} />
                        <input type="password" placeholder="Confirm password"
                            onChange={event => setConfirmPassword(event.target.value)}
                            defaultValue={confirmPassword} value={confirmPassword} />
                        <button type={"submit"} onClick={(e) => {
                            e.preventDefault();
                            signUp(firstName, lastName, type, email, password, confirmPassword);
                            resetState()
                        }}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                            defaultValue={email} value={email} />
                        <input type="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                            defaultValue={password} value={password} />
                        <a href="/reset">Forgot your password?</a>
                        <button type={"submit"}
                            onClick={(e) => {
                                e.preventDefault();
                                signIn(email, password)
                                resetState()
                            }}>Sign In
                        </button>
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