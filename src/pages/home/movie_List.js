import React from "react";
import "./movie_List.css";
import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import Play from "@material-ui/icons/PlayArrow";
import noImage from "../home/image_Not-available.gif";
import { Link } from "react-router-dom";

class movieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      users: [],
      liked:false
    };
  }

  componentWillMount() {
    fetch(
      "https://cdn-discover.hooq.tv/v1.5/discover/collections/5dabcee7-9863-44f7-98c9-1854a7723de1/titles?titleType=MOVIE&page=1&perPage=40"
    )
      .then(response => response.json())
      .then(results =>
       this.setState({ users: results.data }));
      
  }

  // starting mouse hover event codes
  onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

  render() {
    let users = this.state.users;

 
    
    function sayHello() {
      alert("lol");
    }
  
  
    return (
      <div className="listContiner">
        {/* style={{backgroundImage:"url('https://vonnue.com/assets/img/kit/pro/bg9.jpg')"}} */}
        {users.map(user => (
          
          <Card 
            className="class_card"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <Link to={"/movie/"+user.id} className='class_media'>
        
              <img
                src={user.images[0] ? user.images[0].url : noImage}
                className="img_class"
                alt="movie_image"
              ></img>
            </Link>
     

            <div className="action_container">
              <Play className="class_play" onClick={sayHello}></Play>
              <Like
                className={
                  user.meta.releaseYear > 2005 ? "class_like" : "class_Unlike"
                }
                onClick={sayHello}
              ></Like>
              <WatchLater
                className="class_watchlater"
                onClick={sayHello}
              ></WatchLater>
             
            </div>
          </Card>
        ))}
      </div>
    );
  }
}
export default movieList;
