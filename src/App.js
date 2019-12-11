import React, { Component } from "react";
import "./App.css";
import Nav from './components/navigation'
import movie_List from "./pages/home/movie_List";
import Login from "./pages/login/login";
import movieDetails from "./pages/movieDetails/movie_details"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
      <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/home' component={movie_List}></Route>
          <Route exact path='/movie/:id' component={movieDetails}></Route>
        </Switch>
    </div>
    </Router>
    );
  }
}

export default App;

