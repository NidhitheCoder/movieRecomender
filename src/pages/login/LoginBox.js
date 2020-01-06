import React from "react";

import "./login.css";

const LoginBox = props => {
  return (
    <div className="class_login_box">
      <h1>LOGIN</h1>
      <input
        type="email"
        className="class_element"
        placeholder="Username"
        value={props.email}
        onChange={props.setEmail}
      ></input>
      <input
        type="password"
        className="class_element"
        placeholder="Password"
        value={props.Password}
        onChange={props.setPassword}
      ></input>
      <button className="class_button" onClick={props.onLogin}>
        Login
      </button>
      <span style={{textDecoration:'underline',color:'blue'}} onClick={props.forgot}>forgot password?</span>
    </div>
  );
};
export default LoginBox;
