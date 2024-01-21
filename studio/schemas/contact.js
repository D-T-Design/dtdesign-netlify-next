export default {
	name: "contact",
	title: "Contact",
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
			name: "phone",
			title: "Phone",
			type: "string",
		},
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			name: "social",
			title: "Social",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "title", type: "string", title: "Social Title" },
						{ name: "url", type: "string", title: "URL" },
						{
							name: "icon",
							title: "Icon",
							type: "array",
							of: [{ type: "string" }],
							options: {
								list: [
									{ title: "Facebook", value: "Facebook" },
									{ title: "LinkedIn", value: "LinkedIn" },
									{ title: "Github", value: "Github" },
								],
								layout: "radio",
							},
						},
					],
				},
			],
		},
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
	],
};
