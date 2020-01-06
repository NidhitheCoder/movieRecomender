import React from "react";
import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import noImage from "../home/image_Not-available.gif";
import { Link } from "react-router-dom";

const listContiner = props => {
  function sayHello() {
    alert("hell");
  }
  let Movieso = props.array;
  return (
    <div 
    className={Movieso.length === 0 ?"emptyContainer":
    "listContiner"}>
       {Movieso.length === 0 && <span style={{color:'white'}}>No results</span>}
      {Movieso.map(Movie => (
        <Card
          className="class_card"
          onMouseEnter={props.MouseEnter}
          onMouseLeave={props.MouseLeave}
         
        >
          <Link onClick={()=>props.myFunction(Movie)} className="class_media">    
          {/* //to={"/movie/" + Movie.id} */}
            <img
              src={Movie.images[0] ? Movie.images[0].url : noImage}
              className="img_class"
              alt="movie_image"
            ></img>
          </Link>
          <div className="action_container">
            <Like
              className={
                props.ListType==='Liked'? "class_like" : "class_Unlike"
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
};
export default listContiner;
