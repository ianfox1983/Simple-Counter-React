import React from "react";
import { IconClock } from "./iconClock.jsx";
import { Fragment } from "react";
import { TimeCounter } from "./timecounter.jsx";
//create your first component
export const Home = () => {
	return (
		<Fragment>
			<TimeCounter />
			<IconClock />
		</Fragment>
	);
};
