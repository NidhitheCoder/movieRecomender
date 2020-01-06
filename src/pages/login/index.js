import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./login.css";
import { userlogin } from "./userlogin";
import { toast } from "react-toastify";
import LoginBox from "./LoginBox";
import {
  validateEmail,
  validatePassword
} from "/home/nidheesh/Videos/movie-recommender/src/utils/inputvalidation.js";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Login = withRouter(({ history }) => {
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

  const onLogin = async () => {
    if (passwordValid && emailValid) {
      const user = await userlogin(email, password);

      if (user) {
        history.push("/home");
      } else {
        toast.error("Incorrect username or password!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    }
  };

  const setEmailValue = e => {
    setEmail(e.target.value);
  };

  const setPasswordValue = e => {
    setPassword(e.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="class_main_container">
      <LoginBox
        setPassword={setPasswordValue}
        setEmail={setEmailValue}
        onLogin={onLogin}
        Email={email}
        Password={password}
        forgot={handleClickOpen}
      />
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">forgot your password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To findout your account, please enter your registered email address here. We will send your new password to this mail address..
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send Mail
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  );
});

export default Login;
