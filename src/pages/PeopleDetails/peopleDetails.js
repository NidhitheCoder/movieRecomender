import React from "react";
import "/home/nidheesh/Videos/movie-recommender/src/pages/PeopleDetails/PeopleDetails.css";
let Details = () => {
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
      <div class="scrolling-wrap">
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
        <div class="card">
          <h2>Card</h2>
        </div>
      </div>
    </div>
  );
};
export default Details;
