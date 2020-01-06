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
import MoreIcon from "@material-ui/icons/MoreVert";

class Navigationbar extends React.Component {
  render() {
    const isMobile = window.innerWidth <= 500;
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
            ) : (
              <div style={{ float: "right", width: "30%" }}>
                <IconButton
                  onClick={this.props.LikedButton}
                  style={{
                    color:
                      this.props.ListType === "Liked" ? "red" : "lightgrey",
                    marginLeft: "210px"
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
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                  <Menu>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                  </Menu>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Navigationbar;
