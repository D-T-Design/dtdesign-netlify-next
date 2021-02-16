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
		{
			title: "Technology",
			name: "tech",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: [
					{ value: "Adobe Photoshop", title: "Photoshop" },
					{ value: "Adobe Illustrator", title: "Illustrator" },
					{ value: "Adobe XD", title: "XD" },
					{ value: "Shopify", title: "Shopify" },
					{ value: "React", title: "React" },
					{ value: "HTML", title: "HTML" },
					{ value: "CSS", title: "CSS" },
					{ value: "Javascript", title: "JS" },
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
