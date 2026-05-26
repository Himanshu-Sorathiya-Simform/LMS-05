import type { Todo } from "../types/types.ts";

const data: Todo[] = [
	{
		id: 1,
		title: "Morning Standup",
		description: "Discuss the sprint progress and blockers with the team.",
		createdAt: Date.now(),
		completed: true,
	},
	{
		id: 2,
		title: "Refactor Auth Logic",
		description: "Move the JWT handling to the middleware layer.",
		createdAt: Date.now(),
		completed: false,
	},
	{
		id: 3,
		title: "Grocery Shopping",
		description: "Pick up eggs, sourdough bread, and coffee beans.",
		createdAt: Date.now(),
		completed: false,
	},
	{
		id: 4,
		title: "Gym Session",
		description: "Leg day focus: Squats, lunges, and calf raises.",
		createdAt: Date.now(),
		completed: true,
	},
	{
		id: 5,
		title: "Email Client",
		description: "Reply to the project manager regarding the Q3 roadmap.",
		createdAt: Date.now(),
		completed: false,
	},
	{
		id: 6,
		title: "Update Documentation",
		description: "Add the new API endpoints to the Swagger UI docs.",
		createdAt: Date.now(),
		completed: false,
	},
	{
		id: 7,
		title: "Water Plants",
		description: "Don't forget the ferns in the living room.",
		createdAt: Date.now(),
		completed: true,
	},
	{
		id: 8,
		title: "Code Review",
		description: "Review Sarah's PR on the dashboard components.",
		createdAt: Date.now(),
		completed: false,
	},
	{
		id: 9,
		title: "Bank Appointment",
		description: "Discuss the updated mortgage rates with the advisor.",
		createdAt: Date.now(),
		completed: false,
	},
	{
		id: 10,
		title: "Plan Dinner",
		description: "Find a recipe for that leftover salmon in the fridge.",
		createdAt: Date.now(),
		completed: false,
	},
];

export { data };
