import React from "react";
import "./App.css";
import image1 from "./images/WW-Icon-Destiny.gif";
import image2 from "./images/WW-Icon-IP.gif";
import image3 from "./images/WW-Icon-Operational.gif";
import image4 from "./images/WW-Icon-Pooled.gif";
import image5 from "./images/WW-Icon-Track.gif";

function App() {
	return (
		<div className="App">
			<div className="slider">
				<figure>
					<img src={image1} />
					<img src={image2} />
					<img src={image3} />
					<img src={image4} />
					<img src={image5} />
					<img src={image1} />
					<img src={image1} />
					<img src={image2} />
					<img src={image3} />
				</figure>
			</div>
		</div>
	);
}

export default App;
