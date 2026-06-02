import { v } from "@himanshu-sorathiya/omnival";

function validate(fields: [string, string | boolean | number][]) {
	for (const [field, value] of fields) {
		switch (field) {
			case "title": {
				const ans = v
					.string()
					.minLength(3, "Title should have minimum length of 3")
					.validate(value);

				if (!ans.isValid) {
					return {
						isValid: false,
						error: ans.errors[0]?.message ?? "Invalid Value",
					};
				}

				return { isValid: true, error: "" };
			}

			case "description": {
				return { isValid: true, error: "" };
			}

			case "completed": {
				const ans = v.boolean().validate(value);

				if (!ans.isValid) {
					return {
						isValid: false,
						error: ans.errors[0]?.message ?? "Invalid Value",
					};
				}

				return { isValid: true, error: "" };
			}

			default:
				return {
					isValid: false,
					error: `Unexpected field : ${field}`,
				};
		}
	}

	return {
		isValid: false,
		error: `Unexpected Error`,
	};
}

export { validate };
