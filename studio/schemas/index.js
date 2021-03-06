export default {
	name: "index",
	title: "Index",
	type: "document",
	fields: [
		{
			name: "avatar",
			title: "Avatar",
			type: "image",
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true,
					},
				},
			],
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "tech",
			title: "Tech",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ title: "Name", name: "title", type: "string" },
						{ title: "ID", name: "value", type: "string" },
					],
				},
			],
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
		{
			name: "seophoto",
			title: "SEO Photo",
			type: "image",
		},
		{
			title: "Preview Image",
			name: "previewimg",
			type: "image",
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true,
					},
				},
			],
		},
	],
};
