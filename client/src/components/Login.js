import React from "react";
import LoginForm from './LoginForm';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
};

export default Login;
