import React from "react";
import "./movie_details.css";
import Nav from "/home/nidheesh/Videos/movie-recommender/src/components/navigation";
import MovieDetails from "./MovieDetails";
// import {test} from '../home/index/'

class movie_Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: []
    };
  }

  componentWillMount() {
    fetch(
      "https://cdn-discover.hooq.tv/v1.6/discover/titles/" +
        this.props.match.params.id
    )
      .then(response => response.json())
      .then(results => {
        this.setState({ Movies: results.data });
      });
  }
  render() {
    let Movies = this.state.Movies;
    return (
      <div
        className="main_container"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.5), rgb(10,10,11)),url('https://bom1-img-a1000356-edgenet.oneplay.in/df9dcfb8634585424c8906c0860ea1dc/4oSRQ03nJjl8sZAPgIXgi51XZva.jpg.webp')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <Nav
          LikedButton={this.FetchLikedMoviesList}
          WatchLaterButton={this.FetchWatchLaterMoviesList}
          ListType={this.state.ListType}
          AllMovies={this.FetchAllMoviesList}
        />
        <MovieDetails Movies={Movies} />
      </div>
    );
  }
}

export default movie_Details;
