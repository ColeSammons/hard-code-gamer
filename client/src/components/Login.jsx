import React from 'react';
import '../style/Login.css';

const Login = () => {
    return (
        <form className="login__form">
            <div className="login-form">
                <h2>LOGIN</h2>
                
                <div className="form-inputs">
                    <label htmlFor="name">NAME: </label>
                    <input type="text" name="name" id="name"/>
                </div>
                
                <div className="form-inputs">
                    <label htmlFor="email">EMAIL: </label>
                    <input type="email" name="email" id="email" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="password">PASSWORD: </label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="LOGIN" />
                
            </div>
        </form>
    )
}

export default Login


