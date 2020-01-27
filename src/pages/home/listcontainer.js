import React from "react";
import Card from "@material-ui/core/Card";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";

const listContiner = props => {
  function sayHello() {
    alert("hell");
  }
  let Movieso = props.array;
  return (
    <div className={Movieso.length === 0 ? "emptyContainer" : "listContiner"}>
      {Movieso.length === 0 && (
        <span style={{ color: "white" }}>No results</span>
      )}

      {Movieso.map(Movie => (
        <Card
          className="class_card"
          onMouseEnter={props.MouseEnter}
          onMouseLeave={props.MouseLeave}
        >
          <Link to={{pathname:"/movie/" + Movie.id}
        }
          
          className="class_media">
            <div
              style={{
                backgroundImage: "url(" + Movie.images.poster.url + ")",
                backgroundSize: "cover"
              }}
              // src={Movie.images[0] ? Movie.images[0].url : noImage}
              className="img_class"
            >
              <div className="Details_container">
               <span style={{padding:'6%'}}>{Movie.title}</span> 
              </div>
              <div className="action_container">
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
          </Link>
        </Card>
      ))}
    </div>
  );
};
export default listContiner;
