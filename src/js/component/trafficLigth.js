import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("");

	let redSelected = "";
	let yellowSelected = "";
	let greenSelected = "";

	switch (color) {
		case "red":
			redSelected = "red selected";
			break;
		case "yellow":
			yellowSelected = "yellow selected";
			break;
		case "green":
			greenSelected = "green selected";
			break;
	}

	return (
		<div className="container my-5">
			<div className="container bg-dark p-3 rounded">
				<div
					className={"rounded-circle bg-danger light " + redSelected}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"rounded-circle bg-warning light " + yellowSelected
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"rounded-circle bg-success light " + greenSelected
					}
					onClick={() => setColor("green")}></div>
			</div>
			<div className="bottomPole container bg-dark p-3"></div>
		</div>
	);
}
