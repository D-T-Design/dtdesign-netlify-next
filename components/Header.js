import React from "react";

export default function Header({ rank = 2, text, type = "headline" }) {
	const Tag = rank > 6 ? "h6" : `h${rank}`;
	return <Tag className={`heading-${type}`}>{text}</Tag>;
}
