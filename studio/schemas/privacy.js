export default {
	name: "privacy",
	title: "Privacy",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "seotitle",
			title: "SEO Title",
			type: "string",
		},
		{
			name: "seodescription",
			title: "SEO Description",
			type: "string",
		},
	],
};
