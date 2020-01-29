import React from "react";
// import MoviePoster from "../movieDetails/images.jpeg";
import "./movie_details.css";
import Region from "@material-ui/icons/LocationOn";
import Timer from "@material-ui/icons/Timer";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
const MovieDetails = props => {
  const SimilarDemoArr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];
  function sayHello() {
    alert("hell");
  }
  return (
    <div>
      <div className="MovieDetailsMainContainer">
        <div className="img_container">
          <img
            src="https://assets.mubi.com/images/notebook/post_images/19893/images-w1400.jpg?1449196747"
            className="class_imgPoster"
            alt="movie poster"
          ></img>
        </div>

        <div className="details_container">
          <label className="title_class">{props.Movies.title}</label>
          <h5>
            <Timer />
            {props.Movies.running_time_friendly} <Timer />
            {props.Movies.as} <Region /> {props.Movies.region} <br /> <br />
            Director :-{" "}
            <Link to={"/PeopleDetails/"}>{props.Movies.availability}</Link>
            <br />
            Writer :-{" "}
            <Link to={"/PeopleDetails/"}>{props.Movies.availability}</Link>
            <br />
            Cast :-{" "}
            <Link to={"/PeopleDetails/"}>{props.Movies.availability},</Link>
            <Link to={"/PeopleDetails/"}>{props.Movies.availability},</Link>
            <Link to={"/PeopleDetails/"}>{props.Movies.availability}</Link>
          </h5>
          <span>{props.Movies.description} </span>
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
      <h2 style={{ position: "center" }}>Recommended Movies</h2>
      <hr style={{ width: "90%", position: "center" }} />
      <div className="scrolling-wrapper">
        {SimilarDemoArr.length === 0 && (
          <span style={{ color: "white" }}>No results</span>
        )}

        {SimilarDemoArr.map(Movie => (
          <Card
            className="cardSimiler"
            onMouseEnter={props.MouseEnter}
            onMouseLeave={props.MouseLeave}
          >
            <div 
            onClick={()=>props.MovieId("2c0b9a63-c850-459b-abea-4e21ee37cceb")}
                // to={ "/movie/495ba90f-03da-4e4a-af09-5a36fabf3cce" }
              className="class_mediaDetails"
            >
              <div
                style={{
                  background:
                    "url(https://www.joblo.com/assets/images/oldsite/posters/images/full/Moana-Sing-Along-poster-1-large.jpg)",
                  backgroundSize: "cover"
                }}
                // src={Movie.images[0] ? Movie.images[0].url : noImage}
                 className="class_ImgDetails"
              >
                <div className="Details_containerDetails">
                  <span style={{ padding: "6%" }}>movie</span>
                </div>
                <div className="action_containerDetails">
                  <Like
                    className={
                      props.ListType === "Liked" ? "class_like" : "class_Unlike"
                    }
                    onClick={sayHello}
                  ></Like>
                  <WatchLater
                    className="class_watchlater"
                    onClick={sayHello}
                  ></WatchLater>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;
