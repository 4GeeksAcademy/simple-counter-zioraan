import React, { useState, useEffect } from "react";
import Timer from "./timer";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);


	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<Timer digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
		</div>
	);
}
export default Home;
