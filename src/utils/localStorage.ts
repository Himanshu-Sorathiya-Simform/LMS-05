import { data } from "../data/data.ts";

function setLocalStorage(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage<T extends { completed: boolean; completedAt: number }>(
	key: string,
): T[] {
	const val = localStorage.getItem(key);

	if (!val || !JSON.parse(val).length) {
		setLocalStorage(key, data);

		return getLocalStorage(key);
	}

	const startOfToday = new Date().setHours(0, 0, 0, 0);
	const endOfToday = new Date().setHours(23, 59, 59, 999);

	function getRemainingTodos(): T[] {
		if (!val || !JSON.parse(val).length) {
			setLocalStorage(key, data);

			return getLocalStorage(key);
		}

		return (JSON.parse(val) as T[]).filter((todo) => {
			if (!todo.completed) {
				return true;
			}

			const completedToday =
				todo.completedAt
				&& todo.completedAt >= startOfToday
				&& todo.completedAt <= endOfToday;

			return completedToday;
		});
	}

	return getRemainingTodos();
}

export { getLocalStorage, setLocalStorage };
