import type { Todo } from "../types/types.ts";

const data: Todo[] = [
	{
		id: 1,
		title: "Morning Standup",
		description:
			"Discuss the sprint progress and blockers with the team. abc abc abc",
		createdAt: Date.now() - 24 * 60 * 60 * 1000,
		completed: true,
		completedAt: Date.now() - 24 * 60 * 60 * 1000,
	},
	{
		id: 2,
		title: "Refactor Auth Logic",
		description: "Move the JWT handling to the middleware layer.",
		createdAt: Date.now() - 24 * 60 * 60 * 1000,
		completed: true,
		completedAt: Date.now(),
	},
	{
		id: 3,
		title: "Grocery Shopping asdh ewquh dosfjnk asdn asdikjn asdjn asjkldn asjdlnkm m",
		description: "Pick up eggs, sourdough bread, and coffee beans.",
		createdAt: Date.now() - 24 * 60 * 60 * 1000,
		completed: false,
		completedAt: -1,
	},
	{
		id: 4,
		title: "Gym Session",
		description: "Leg day focus: Squats, lunges, and calf raises.",
		createdAt: Date.now(),
		completed: true,
		completedAt: Date.now(),
	},
	{
		id: 5,
		title: "Email Client",
		createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
		completed: false,
		completedAt: -1,
	},
	{
		id: 6,
		title: "Update Documentation",
		description: "Add the new API endpoints to the Swagger UI docs.",
		createdAt: Date.now() - 24 * 60 * 60 * 1000,
		completed: false,
		completedAt: -1,
	},
	{
		id: 7,
		title: "Water Plants",
		description: "Don't forget the ferns in the living room.",
		createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
		completed: true,
		completedAt: Date.now() - 24 * 60 * 60 * 1000,
	},
	{
		id: 8,
		title: "Code Review",
		createdAt: Date.now(),
		completed: false,
		completedAt: -1,
	},
	{
		id: 9,
		title: "Bank Appointment",
		description: "Discuss the updated mortgage rates with the advisor.",
		createdAt: Date.now() - 24 * 60 * 60 * 1000,
		completed: true,
		completedAt: Date.now(),
	},
	{
		id: 10,
		title: "Plan Dinner",
		description: "Find a recipe for that leftover salmon in the fridge.",
		createdAt: Date.now(),
		completed: false,
		completedAt: -1,
	},
];

export { data };
