import React from "react";
import { Link } from "react-router-dom";
import "./ImageView.scss";

const ImageView = props => {
	// This prints an object
	console.log(props.location.state.value);

	// Destructuring the props to later inject them in the return statement
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
					<a href={pageURL}>Go to the Download Page</a>
				</span>
			</button>
			<Link to={{ pathname: "/" }}>
				<button className="homeButton">Home</button>
			</Link>
		</div>
	);
};

export default ImageView;
