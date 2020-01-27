import React, { Component } from "react";
// import Nav from "/home/nidheesh/Videos/movie-recommender/src/components/navigation";
import Details from "./peopleDetails";
import "/home/nidheesh/Videos/movie-recommender/src/pages/PeopleDetails/PeopleDetails.css";
class PeopleDetails extends Component {
  render() {
    return (
      <div className="MainContainer">
        {/* <Nav /> */}
        <Details />
      </div>
    );
  }
}

export default PeopleDetails;
