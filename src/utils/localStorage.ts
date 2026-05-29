import { data } from "../data/data.ts";

function setLocalStorage(key: string, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key: string) {
	const val = localStorage.getItem(key);

	if (!val || !JSON.parse(val).length) {
		setLocalStorage(key, data);

		return data;
	}

	return JSON.parse(val);
}

export { getLocalStorage, setLocalStorage };
