import React from "react";
import "./movie_List.css";
import { apiEndPoints } from "/home/nidheesh/Videos/movie-recommender/src/utils/api.js";
// import Nav from "/home/nidheesh/Videos/movie-recommender/src/components/navigation";
import ListContiner from "./listcontainer";
// import noImage from "../home/image_Not-available.gif";


class movieList extends React.Component {
  constructor(props) {
    super(props);
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


  render() {
    let MovieDetails = this.state.DetailMovie;
    // let languages=Object.values(MovieDetails.languages)
    var arr = [];
    for (var key in MovieDetails.languages) {
      arr.push(MovieDetails.languages[key]);
    }
    return (
      <div>
        {/* <Nav
          LikedButton={this.FetchLikedMoviesList}
          WatchLaterButton={this.FetchWatchLaterMoviesList}
          ListType={this.state.ListType}
          AllMovies={this.FetchAllMoviesList}
        /> */}
        <ListContiner
          array={this.state.Movies}
          MouseEnter={this.onMouseEnter}
          MouseLeave={this.onMouseLeave}
          myFunction={this.handleClickOpen}
          LikedButton={this.FetchLikedMoviesList}
          WatchLaterButton={this.FetchWatchLaterMoviesList}
          ListType={this.state.ListType}
          AllMovies={this.FetchAllMoviesList}
        />
       </div>
    );
  }
}

export default movieList;


