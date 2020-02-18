import React from "react";
import { Link } from "react-router-dom";
import "./ImageList.scss";

const ImageList = ({ data }) => {
  return (
    <>
      <div className="container-grid">
        {data.map(value => (
          <div className="card" key={value.id}>
            <img src={value.userImageURL} alt={value.type}></img>
            <p>{value.tags}</p>
            <p>User: {value.user_id}</p>
            <Link to={{
				pathname: `/image/${value.user_id}`,
				state : {value}
			}}>
              <button>View image</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageList;
