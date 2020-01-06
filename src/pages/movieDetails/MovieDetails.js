import React from "react";
import noimg from "../home/image_Not-available.gif";
import "./movie_details.css";
import Region from "@material-ui/icons/LocationOn";
import Subtitles from "@material-ui/icons/Subtitles";
import Timer from "@material-ui/icons/Timer";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";
const MovieDetails = props => {
  return (
    <div>
      <div className="MovieDetailsMainContainer">
        <div className="img_container">
          <img
            src="https://assets.mubi.com/images/notebook/post_images/19893/images-w1400.jpg?1449196747"
            className="class_img"
            alt="movie poster"
          ></img>
        </div>

        <div className="details_container">
          <label className="title_class">{props.Movies.title}</label>
          <h4>
            <Timer />
            {props.Movies.running_time_friendly} <Timer />
            {props.Movies.as} <Region /> {props.Movies.region} <Subtitles />
            {props.Movies.availability}
          </h4>
          <h5>{props.Movies.description} </h5>
          <br />
          <div className="class_icon_container">
            <label className="icon_lbl">
              {" "}
              Like <Like />{" "}
            </label>
            <label className="icon_lbl">
              <WatchLater />
              my watchlist
            </label>
          </div>
        </div>
      </div>

      <h2 style={{ position: "center" }}>Cast</h2>
      <hr style={{ width: "90%", position: "center" }} />
      <div class="scrolling-wrapper">
        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 1</h4>
          <h5>role</h5>
        </div>

        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 2</h4>
          <h5>role</h5>
        </div>

        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 3</h4>
          <h5>role</h5>
        </div>

        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 4</h4>
          <h5>role</h5>
        </div>

        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 5</h4>
          <h5>role</h5>
        </div>

        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 6</h4>
          <h5>role</h5>
        </div>

        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 7</h4>
          <h5>role</h5>
        </div>
        <div className="CastCard">
          <Link className="CastCardRoundBtn" to={"/PeopleDetails/"}>
            <img
              className="CastCardRound"
              src={noimg}
              alt="personalt"
              onClick=""
            />
          </Link>
          <h4>person Number 8</h4>
          <h5>role</h5>
        </div>

        {/* <div className="CastCard">
        <Link
          className='CastCardRound'
          to={"/PeopleDetails/"}
          style={{ backgroundImage: noimg }}
        >
          <h3>image</h3>
        </Link>
        <h4>person Number 2</h4>
        <h5>role</h5>
        </div>
       
        */}
      </div>

      <h2 style={{ position: "center" }}>Recommended Movies</h2>
      <hr style={{ width: "90%", position: "center" }} />
      <div class="scrolling-wrapper">
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
