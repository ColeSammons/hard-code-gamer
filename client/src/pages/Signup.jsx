import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../style/Login.css';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="app__main">
      <div className="login__container">
        <form className="login__form">
          <div className="login-form">
            <h2>Signup</h2>
            <div className="form-inputs">
              <label htmlFor="username">NAME: </label>
              <input
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
            </div>
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
          {error && <div>Sign up failed</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
