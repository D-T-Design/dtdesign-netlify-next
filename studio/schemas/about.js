export default {
	name: "about",
	title: "About",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "seodescription",
			title: "SEO Description",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "gallery",
			title: "Gallery",
			type: "array",
			of: [
				{
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
		},
	],
};
