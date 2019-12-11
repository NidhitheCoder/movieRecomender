import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./login.css";
 import {userlogin} from "./userlogin";
import { toast } from 'react-toastify';
import {validateEmail,validatePassword} from '/home/nidheesh/Videos/movie-recommender/src/utils/inputvalidation.js'

const Login = withRouter(() => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailError] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  useEffect(() => {
    // hack to prevent initial error state
    if (email) {
        setEmailError(validateEmail(email));
      }
      if (password) {
        setPasswordValid(validatePassword(password));
      }
  }, [email, password]);


  const onLogin = async ( ) => {
    if (passwordValid && emailValid) {

      const user = await userlogin(email, password);

      if (user) {
        console.log(user)
      } else {
        toast.error('Incorrect username or password!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    }
  };

  const setEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordValue = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="class_main_container">
      <div className="class_login_box">
        <h1>LOGIN</h1>
        <input
          type="email"
          className="class_element"
          placeholder="Username"
          value={email}
          onChange={setEmailValue}
        ></input>
        <input
          type="password"
          className="class_element"
          placeholder="Password"
          value={password}
          onChange={setPasswordValue}
        ></input>
        <button className="class_button" onClick={onLogin}>Login</button>
        <a href='dudu' >forgot password?</a>
      </div>
    </div>
  );
});

export default Login;
