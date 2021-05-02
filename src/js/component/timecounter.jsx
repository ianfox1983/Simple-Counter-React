import React from "react";

import { useState } from "react";
import { useEffect } from "react";

export function TimeCounter() {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);

	useEffect(() => {
		if (counter == 10) {
			return setCounter(0);
		}

		counter >= 0 && setTimeout(() => setCounter(counter + 1), 100);
	}, [counter]);

	useEffect(() => {
		if (counter2 == 10) {
			return setCounter2(0);
		}
		counter2 >= 0 && setTimeout(() => setCounter2(counter2 + 1), 1000);
	}, [counter2]);

	React.useEffect(() => {
		if (counter3 == 10) {
			return setCounter3(0);
		}
		counter3 >= 0 && setTimeout(() => setCounter3(counter3 + 1), 10000);
	}, [counter3]);

	React.useEffect(() => {
		if (counter4 == 10) {
			return setCounter4(0);
		}
		counter4 >= 0 && setTimeout(() => setCounter4(counter4 + 1), 100000);
	}, [counter4]);

	return (
		<div className="seconds">
			<div className="">
				{counter4}
				{counter3}:{counter2}
				{counter}
			</div>
		</div>
	);
}
