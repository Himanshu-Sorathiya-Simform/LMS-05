function formatDate(date: Date | number | string = new Date()): string {
	const d = new Date(date);

	if (isNaN(d.getTime())) {
		throw new RangeError("Invalid date");
	}

	return new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		day: "2-digit",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	}).format(d);
}

export { formatDate };
