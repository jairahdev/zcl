import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Box, Text, Link, Span, Icon, Section } from "@quarkly/widgets";
import { FaBehance } from "react-icons/fa";
const defaultProps = {
	"padding": "100px 0 24px 0",
	"quarkly-title": "FOOTER"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"grid-column": "1",
			"grid-row": "1",
			"align-self": "center",
			"justify-self": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"src": "https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z",
			"margin": "auto auto auto auto"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"grid-column": "4",
			"grid-row": "1",
			"padding": "10px 10px 10px 10px",
			"background": "none"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"sm-font": "10px \"Public Sans\", sans-serif",
			"children": "Credits"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/credits",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "A list of thank you's.",
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"grid-column": "3",
			"grid-row": "1",
			"padding": "10px 10px 10px 10px",
			"background": "none"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"sm-font": "10px \"Public Sans\", sans-serif",
			"children": "Navigation"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Home",
			"lg-margin": "0px 0px 5px 0px",
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/profile",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Profile",
			"lg-margin": "0px 0px 5px 0px",
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/philosophy",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Philosophy",
			"lg-margin": "0px 0px 5px 0px",
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/projects",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Projects",
			"lg-margin": "0px 0px 5px 0px",
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"grid-column": "2",
			"grid-row": "1",
			"padding": "10px 10px 10px 10px",
			"background": "none"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"sm-font": "10px \"Public Sans\", sans-serif",
			"children": "Project"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"color": "rgba(214, 214, 214, 0.7)",
			"children": <Span
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				md-font="300 12px &quot;Public Sans&quot;, sans-serif"
				font="200 14px/150% &quot;Public Sans&quot;, sans-serif"
			>
				© Jairah  |  Website Design, Copy, and Visual Design
				<br />
				View and appreciate this project!
				<br />
			</Span>,
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-start",
			"align-content": "center",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaBehance,
			"width": "12px",
			"height": "12px",
			"margin": "0px 10px 0px 0px",
			"color": "rgba(214, 214, 214, 0.7)"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "#",
			"color": "rgba(214, 214, 214, 0.7)",
			"text-decoration-line": "initial",
			"font": "200 14px \"Public Sans\", sans-serif",
			"children": "Behance",
			"lg-font": "14px --fontFamily-googlePublicSans",
			"md-font": "12px --fontFamily-googlePublicSans",
			"sm-font": "200 10px --fontFamily-googlePublicSans"
		}
	}
};

const FinalFooter = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" display="grid" grid-template-columns="1fr 2fr repeat(2, 1fr)" />
		<Box {...override("box")}>
			<Image {...override("image")} />
		</Box>
		<Box {...override("box1")}>
			<Text {...override("text")} />
			<Link {...override("link")} />
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text1")} />
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
			<Link {...override("link4")} />
		</Box>
		<Box {...override("box3")}>
			<Text {...override("text2")} />
			<Text {...override("text3")} />
			<Box {...override("box4")}>
				<Icon {...override("icon")} />
				<Link {...override("link5")} />
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(FinalFooter, { ...Section,
	defaultProps,
	overrides
});
export default FinalFooter;