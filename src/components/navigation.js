import React from "react";
import "./Navigation.css";
// import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import Home from "@material-ui/icons/Home";
import MoreIcon from "@material-ui/icons/MoreVert";

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  render() {
    const path=window.location.pathname;
    console.log(this.props.location)
    const handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    const handleClose = () => {
      this.setState({ anchorEl: null });
    };
    const open = Boolean(this.state.anchorEl);
    const Search = () => {
      console.log(window.location.pathname);
    };
    const isMobile = window.innerWidth <= 500;

    const Logout=()=>{
        localStorage.clear();
        window.location.href = '/';
    }
    return (
      <div style={{ paddingRight: "0px" }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", position: "fixed" }}
        >
          <Toolbar>
            <Typography onClick={this.props.AllMovies} variant="h6" noWrap>
              Movie Recommendor
            </Typography>
            <div className="DivSearch">
              <SearchIcon className="Searchicon" />
              <InputBase
                onClick={Search}
                style={{ color: "White" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className="input"
              />
            </div>
            <div />
            {isMobile === true ? (
              <div>
                <IconButton
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            ) : path==='/'?
            (
              <div style={{ float: "right", width: "531px" }}>
                <IconButton
                  onClick={()=>{ 
                    localStorage.clear();
                    window.location.href = '/home'
                   }}
                  style={{
                    color: this.props.ListType === "ALL" ? "red" : "lightgrey",
                    marginLeft: "50%"
                  }}
                >
                  <Home className="like_button" />
                </IconButton>
              </div>
            )
            :
            (
              <div style={{ float: "right", width: "531px" }}>
                <IconButton
                  onClick={this.props.AllMovies}
                  style={{
                    color: this.props.ListType === "ALL" ? "red" : "lightgrey",
                    marginLeft: "50%"
                  }}
                >
                  <Home className="like_button" />
                </IconButton> 
                <IconButton
                  onClick={this.props.LikedButton}
                  style={{
                    color: this.props.ListType === "Liked" ? "red" : "lightgrey"
                  }}
                >
                  <Like className="like_button" />
                </IconButton>
                <IconButton
                  onClick={this.props.WatchLaterButton}
                  style={{
                    color:
                      this.props.ListType === "WatchLater"
                        ? "#2ed22e"
                        : "lightgray"
                  }}
                >
                  <WatchLater />
                </IconButton>
                <IconButton
                  aria-controls="simple-menu"
                  onClick={handleClick}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  style={{ marginTop: "2%" }}
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={Logout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Navigationbar;
