import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';

import LoginRegister from '../../components/login-register/login-register.component';
import { LoginPrivateRoute } from "../PrivateRoute";

import './login-registerpage.styles.css';

const LoginPage = () => {
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    const [link, setLink] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('uid'));
        setRole(localStorage.getItem('role'));
        roleRedirection()
    })

    const roleRedirection = () => {
        switch(role) {
            case 'chair':
                setLink('/chairhome')
                break
            case 'author':
                setLink('/authorhome')
                break
            case 'reviewer':
                setLink('/reviewerhome')
                break
            default:
                break
        }
    }

    return (
        <div>
            {!token &&
                <LoginRegister/>
            }
            {token && link &&
                <Navigate to={link} />
            }
        </div>
    )
}

export default LoginPage;