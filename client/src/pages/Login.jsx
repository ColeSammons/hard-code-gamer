import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import '../style/Login.css';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = response.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return (
        <form>
            <div className="login-form">
                <h2>LOGIN</h2>

                <div className="form-inputs">
                    <label htmlFor="email">EMAIL: </label>
                    <input
                        placeholder='Your email'
                        name='email'
                        type='email'
                        id='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-inputs">
                    <label htmlFor="password">PASSWORD: </label>
                    <input
                        placeholder='******'
                        name='password'
                        type='password'
                        id='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="LOGIN" onClick={handleFormSubmit}/>
            </div>
            {error && <div style={{color: "black"}}>Login failed</div>}
        </form>
    )
}

export default Login
