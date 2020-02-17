import React from "react";
import { Link } from "react-router-dom";
import "./ImageView.scss";

const ImageView = props => {
  console.log(props.location.state.value);
  const {
    userImageURL: image,
    tags,
    user: owner,
    pageURL
  } = props.location.state.value;
  return (
    <div className="imageContainer">
      <img className="image" src={image} alt={tags}></img>
      <h4>
        Credits: <span>{owner}</span>
      </h4>
      <button className="downloadButton">
        <span>
          <a target="_blank" href={pageURL}>
            Go to the Download Page
          </a>
        </span>
      </button>
      <Link to={{pathname: "/"}}><button className="homeButton">Home</button></Link>
    </div>
  );
};

export default ImageView;
