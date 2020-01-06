import React from 'react'
// import TextField from '@material-ui/core/TextField';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
import noImage from "../home/image_Not-available.gif";
import { Link } from "react-router-dom";

const PopUp=()=>{
    return(
      <div className='popup'>  
      <div className='popup\_inner'>  
      <h1>{this.props.text}</h1>  
      <button onClick={this.props.closePopup}>close me</button>  
      </div>  
      </div>  
    )
}
export default PopUp;