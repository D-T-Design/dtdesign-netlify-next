export default {
	name: "project",
	title: "Project",
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
			type: "text",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
		},
		{
			name: "linkUrl",
			title: "Link URL",
			type: "string",
		},
		{
			name: "codeUrl",
			title: "Code URL",
			type: "string",
		},
		{
			name: "gallery",
			title: "Gallery",
			type: "array",
			of: [{ type: "image" }],
		},
		{
			title: "Technology",
			name: "tech",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: [
					{ value: "HTML", title: "HTML" },
					{ value: "CSS", title: "CSS" },
					{ value: "JS", title: "JS" },
					{ value: "Webflow", title: "Webflow" },
				],
				layout: "checkbox",
			},
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