interface Todo {
	id: number;
	title: string;
	createdAt: number;
	completed: boolean;
	completedAt: number;
	description?: string;
}

export type { Todo };
