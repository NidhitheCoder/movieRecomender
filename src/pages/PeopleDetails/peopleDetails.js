import React from "react";
import "/home/nidheesh/Videos/movie-recommender/src/pages/PeopleDetails/PeopleDetails.css";
import Card from "@material-ui/core/Card";
import Like from "@material-ui/icons/Favorite";
import WatchLater from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";
let Details = () => {
  const SimilarDemoArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  function sayHello() {
    alert("hell");
  }
  return (
    <div>
      <div className="DeatailsContainer">
        <div
          className="cardPerson"
          style={{
            backgroundImage:
              "url(https://bom1-yimg-picnet1000-edgenet.oneplay.in/b46b6cb6db285403fa5770592e42041b/mvbsTmf1ii1mycFfZRSbyX1y5Jo.jpg)"
          }}
        ></div>
        <h2>nazriya nazim</h2>
        <h5>malayalam,tamil,telugu</h5>
        <span>
          Nazriya Nazim is an Indian television anchor and film actress from
          Kerala, who appears in South Indian cinema....
        </span>
      </div>
      <h2 style={{ position: "center" }}>Movies By Nazriya nazim</h2>
      <hr style={{ width: "90%" }} />
      <div class="scrolling-wrapper">
      {SimilarDemoArr.map(No=>
        <Card
        className="cardSimiler"
        // onMouseEnter={props.MouseEnter}
        // onMouseLeave={props.MouseLeave}
      >
        <Link 
            to={{ pathname: "/movie/c3a4c614-00b4-45b3-856a-4f6e9c67d3aa" }}
          className="class_mediapeople"
        >
          <div
            style={{
              background:
                "url(https://www.joblo.com/assets/images/oldsite/posters/images/full/Moana-Sing-Along-poster-1-large.jpg)",
              backgroundSize: "cover"
            }}
            // src={Movie.images[0] ? Movie.images[0].url : noImage}
            className="class_ImgPeople"
          >
            <div className="Details_containerPeople">
              <span style={{ padding: "6%" }}>movie {No}</span>
            </div>
            <div className="action_containerPeople">
              <Like
                className={ "class_like"
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
   )}
     </div>
    </div>
  );
};
export default Details;
