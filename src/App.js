import React, { useState } from "react";
import "./App.scss";

// Component imports
import InputForm from "./components/input_form/InputForm";
import ImageList from "./components/imageList/ImageList";

const API_KEY = "15067697-a347138b0dcbd88a15f281e67";

/*
https://pixabay.com/api/videos/?key=15067697-a347138b0dcbd88a15f281e67&q=yellow+flowers
*/

function App() {
	const [data, setData] = useState([]);

	const makeApiRequest = async e => {
		// prevent default
		e.preventDefault();

		// Grab input
		const search = e.target.elements.name.value;

		// Make api request
		const req = await fetch(
			`https://pixabay.com/api/videos/?key=${API_KEY}&q=${search}`
		);

		const response = await req.json();
		setData(response.hits);
	};

	return (
		<>
			<InputForm request={makeApiRequest} />
			<ImageList data={data} />
		</>
	);
}

export default App;
