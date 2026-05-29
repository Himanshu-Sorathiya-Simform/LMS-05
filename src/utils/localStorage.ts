import { data } from "../data/data.ts";

function setLocalStorage(key: string, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage<T>(key: string): T {
	const val = localStorage.getItem(key);

	if (!val) {
		setLocalStorage(key, data);
		return data as T;
	}

	return JSON.parse(val);
}

export { getLocalStorage, setLocalStorage };
