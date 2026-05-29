import { useState } from "react";

function useLocalStorage<T>(key: string, defaultValue: T) {
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		const value = localStorage.getItem(key);

		if (value) {
			return JSON.parse(value);
		} else {
			localStorage.setItem(key, JSON.stringify(defaultValue));

			return defaultValue;
		}
	});

	function setLocalStorageStateValue(valueOrFn) {
		const value =
			typeof valueOrFn === "function" ?
				valueOrFn(localStorageValue)
			:	valueOrFn;

		localStorage.setItem(key, JSON.stringify(value));

		setLocalStorageValue(value);
	}

	return [localStorageValue, setLocalStorageStateValue];
}

export default useLocalStorage;
