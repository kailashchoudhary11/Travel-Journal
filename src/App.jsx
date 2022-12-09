import React from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "./data";

function App() {
	const locations = data.map(item => 
			<Location 
				key={item.id}
				item={item}
			/>
		); 
	return (
		<div className="app">
			<Navbar />
			<section className="locations">
				{locations}
			</section>
		</div>
	);
}

export default App;