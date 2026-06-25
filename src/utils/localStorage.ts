function getLocalStorageData<T>(key: string, defaultValue: T) {
	const data = localStorage.getItem(key);

	if (!data) return defaultValue;

	return JSON.parse(data) as T;
}

function setLocalStorageData<T = unknown>(key: string, data: T) {
	localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalStorageData, setLocalStorageData };
