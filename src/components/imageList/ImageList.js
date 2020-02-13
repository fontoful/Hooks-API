import React from "react";
import "./ImageList.scss";

const ImageList = ({ data }) => {
	return (
		<>
			<div className="container-grid">
				{data.map(value => (
					<div className="card">
						<img src={value.userImageURL} alt={value.type}></img>
						<p>{value.tags}</p>
						<p>User: {value.user_id}</p>
						<button>View image</button>
					</div>
				))}
			</div>
		</>
	);
};

export default ImageList;
