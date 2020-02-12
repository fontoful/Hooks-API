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
					</div>
				))}
			</div>
		</>
	);
};

export default ImageList;
