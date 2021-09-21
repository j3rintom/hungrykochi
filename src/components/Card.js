import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img src={props.url} alt="" />
        </div>
        <div className="description">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
