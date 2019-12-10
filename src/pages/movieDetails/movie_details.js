import React from "react";
import noImage from "../home/image_Not-available.gif";
import "./movie_details.css";
// import Dot  from '@material-ui/icons/FiberManualRecord';
import Timer from "@material-ui/icons/Timer";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import Play from "@material-ui/icons/PlayArrow";



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
        console.log(results);
        this.setState({ Movies: results.data });
      });
  }
  render() {
    let Movies = this.state.Movies;
    return (
      <div
        className='main_container'
      >
        <div className='img_container'>
          <img src={noImage} className="class_img" alt="movie poster"></img>
        </div>
        <div className='details_container'>
          <label className='title_class'>{Movies.title}</label>
          <h4>
            <Timer />
            {Movies.running_time_friendly}  <Timer />
            {Movies.as} <Timer /> {Movies.region} <Timer />{Movies.availability}
          </h4>
          <h5>{Movies.description} </h5>
          <br />
          <div className='class_icon_container'>
         <label className='icon_lbl'><Play/>play</label>
         <label className='icon_lbl'> Like <Like/> </label>
         <label className='icon_lbl'>< WatchLater/>my watchlist</label>
          </div>
        </div>
      </div>
    );
  }
}

export default movie_Details;
