import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { login } from "./util/api";
import { BubbleContext } from "./context/bubbleContext";

const Login = () => {
  const { dispatch } = useContext(BubbleContext);
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const [loginMessage, setLoginMessage] = useState({
    msg: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!(loginData.username && loginData.password)) {
      setLoginMessage("Please enter Name and Password");
    } else {
      login(loginData, dispatch);
    }
  };

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  if (localStorage.getItem("MTN-token")) {
    return <Redirect to='bubblepage' />;
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>{loginMessage.msg ? loginMessage.msg : ""}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Name:</h3>
          <input
            type='text'
            name='username'
            placeholder='Name'
            value={loginData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          <h3>Password:</h3>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={loginData.passwordd}
            onChange={handleChange}
          />
        </label>
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
