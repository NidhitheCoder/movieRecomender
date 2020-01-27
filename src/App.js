import React, { Component } from "react";
import "./App.css";
import movie_List from "./pages/home";
import Login from "./pages/login";
import movieDetails from "./pages/movieDetails";
import PeopleDetails from "./pages/PeopleDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import Nav from "/home/nidheesh/Videos/movie-recommender/src/components/navigation.js";

class App extends Component {
  render() {
    return (
      <Router  >
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={movie_List}></Route>
            <Route
              exact
              path="/movie/:id"
              component={movieDetails}
                // component={(Props) => <movieDetails title={movieList.FetchLikedMoviesList}  />}
            ></Route>
            <Route
              exact
              path="/PeopleDetails/"
              component={PeopleDetails}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
