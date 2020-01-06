import React from "react";
import "./movie_List.css";
import { apiEndPoints } from "/home/nidheesh/Videos/movie-recommender/src/utils/api.js";
import Nav from "/home/nidheesh/Videos/movie-recommender/src/components/navigation";
import ListContiner from "./listcontainer";
import Timer from "@material-ui/icons/Timer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ReactPlayer from "react-player";
// import noImage from "../home/image_Not-available.gif";
import { Link } from "react-router-dom";

class movieList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.state = {
      hovered: false,
      Movies: [],
      ListType: "ALL",
      Open: false,
      DetailMovie: []
    };
  }
  FetchAllMoviesList = () => {
    this.setState({ ListType: "ALL" });
    const apiUrlAllMOviesList = apiEndPoints.GetAllMoviesList();
    fetch(apiUrlAllMOviesList)
      .then(response => response.json())
      .then(results => this.setState({ Movies: results.data }));
  };
  FetchLikedMoviesList = () => {
    this.setState({ ListType: "Liked" });

    const apiUrlLikedMOviesList = apiEndPoints.GetLikedMoviesList();
    fetch(apiUrlLikedMOviesList)
      .then(response => response.json())
      .then(results => {
        this.setState({ Movies: results.data });
      });
  };
  FetchWatchLaterMoviesList = () => {
    this.setState({ ListType: "WatchLater" });
    const apiUrlWatchLaterMOviesList = apiEndPoints.GetWatchLaterMoviesList();
    fetch(apiUrlWatchLaterMOviesList)
      .then(response => response.json())
      .then(results => {
        this.setState({ Movies: results.data });
      });
  };
  componentWillMount() {
    // console.log(this.state.All)
    // if(this.state.All===true){
    //   this.FetchAllMoviesList();
    // }
    if (this.state.ListType === "ALL") {
      this.FetchAllMoviesList();
    }
  }

  // starting mouse hover event codes
  onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

  handleClickOpen(movie) {
    const apiUrlMovieDetailsById = apiEndPoints.GetMovieDetailsById(movie.id);
    fetch(apiUrlMovieDetailsById)
      .then(response => response.json())
      .then(results => {
        this.setState({ DetailMovie: results.data });
      });
    this.setState({ Open: true });
  }
  handleClickClose = () => {
    this.setState({ Open: false });
  };

  render() {
    let MovieDetails = this.state.DetailMovie;
    // let languages=Object.values(MovieDetails.languages)
    var arr = [];
    for (var key in MovieDetails.languages) {
      arr.push(MovieDetails.languages[key]);
    }

    return (
      <div>
        <Nav
          LikedButton={this.FetchLikedMoviesList}
          WatchLaterButton={this.FetchWatchLaterMoviesList}
          ListType={this.state.ListType}
          AllMovies={this.FetchAllMoviesList}
        />
        <ListContiner
          array={this.state.Movies}
          MouseEnter={this.onMouseEnter}
          MouseLeave={this.onMouseLeave}
          myFunction={this.handleClickOpen}
          // LikedButton={this.FetchLikedMoviesList}
          // WatchLaterButton={this.FetchWatchLaterMoviesList}
          ListType={this.state.ListType}
          // AllMovies={this.FetchAllMoviesList}
        />

        {/* //this is a popup  */}

        <Dialog
          open={this.state.Open}
          scroll="body"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          className="classDialog"
          onClick={this.handleClickClose}
        >
          <DialogActions className="classDialogAction">
            <DialogContent className="classDialogContent">
              <div className="playerContainer">
                <ReactPlayer
                  controls={true}
                  fileConfig={{
                    attributes: {
                      poster:
                        "https://commodusprod.hooq.tv/cdnimagesprod/titles/1825504/BACKGROUND/1551731340-3ad0542aea0e8842a565e69dd32ece74d7c27351.png"
                    }
                  }}
                  width="100%"
                  height="100%"
                  url="https://hq-clr.akamaized.net/manifest/v1/hls/v4/aes128/5819061491001/797e73c5-cc51-4163-8af5-9f1b1ae42ce0/10s/master.m3u8"
                />
              </div>

              <div className="DetailsContainer">
                <h1> {MovieDetails.title}</h1>
                <h5>
                  <span className="spanStyle">9.6/10</span>
                  <span className="spanStyle">horror,thriller</span>

                  <span className="spanStyle">
                    {" "}
                    <Timer />
                    {MovieDetails.running_time_friendly}
                  </span>
                  <span className="spanStyle">Released: 22-12-1823</span>
                </h5>
                <h5>crue:john,elizha,roony,jacob</h5>
                <h5>languages:english,hindi,tamil,bahasha</h5>
                <h6>Description : {MovieDetails.short_description}</h6>
              </div>

              <Link
                to={"/movie/" + MovieDetails.id}
                color="primary"
                className="SeeMoreStyle"
              >
                See More Details >>
              </Link>
              <span style={{ float: "left" }}>Similar contents :-</span>
              <div className="SimilarContentContainer">
                {arr.map(Movie => (
                  <div className="SimilarCard">
                    <h4> {Movie}</h4>
                  </div>
                ))}
              </div>
            </DialogContent>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default movieList;

// export function test(){
//   FetchLikedMoviesList

//  }
