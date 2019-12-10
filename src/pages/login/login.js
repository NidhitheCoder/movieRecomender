import React from 'react'
import "./login.css"


class Login extends React.Component{
    render(){
        function sayHello() {
            alert("you are on the way to login....");
          }
        return(
            <div  className="class_main_container">
           <div className='class_login_box'>
              <h1>LOGIN</h1> 
              <input type='text' className='class_element' placeholder='Username'></input>
              <input type='password' className='class_element' placeholder='Password'></input>
              <button className='class_button' onClick={sayHello}>Login</button>
           </div>
            </div>
        )
    }
}
export default Login;