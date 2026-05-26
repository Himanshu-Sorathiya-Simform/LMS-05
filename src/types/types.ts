interface Todo {
	id: number;
	title: string;
	createdAt: number;
	completed: boolean;
	description?: string;
}

export type { Todo };
