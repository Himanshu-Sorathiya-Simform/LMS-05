import { days, months } from "../constants/dateAndTime.ts";

function Today() {
	const dateObj = new Date();
	const month = dateObj.getMonth();
	const date = dateObj.getDate();
	const day = dateObj.getDay();

	return (
		<div>
			<p className="text-2xl">
				{days[day]}, {date} {months[month]}
			</p>
		</div>
	);
}

export default Today;
