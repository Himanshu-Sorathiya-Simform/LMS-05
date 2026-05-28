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
					return ans.errors[0]?.message;
				}

				return true;
			}

			case "description": {
				return true;
			}

			case "completed": {
				const ans = v.boolean().validate(value);

				if (!ans.isValid) {
					return ans.errors[0]?.message;
				}

				return true;
			}

			default:
				return `Unexpected field : ${field}`;
		}
	}

	return "Unexpected";
}

export { validate };
