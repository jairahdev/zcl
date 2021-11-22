import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Box, Text, Link, Span, Section } from "@quarkly/widgets";
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
			"children": "Acknowledgements"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "300 14px/150% \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"color": "rgba(214, 214, 214, 0.7)",
			"children": <>
				Please{" "}
				<Link
					href="https://zhongchenle.netlify.app/credits"
					target="_self"
					color="rgba(214, 214, 214, 0.7)"
					text-decoration-line="initial"
					font="400 14px &quot;Public Sans&quot;, sans-serif"
				>
					click here
				</Link>
				{" "}for a full list of credits for this project.
			</>
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
	"text2": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"children": "Navigation"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Home"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/profile",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Profile"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/philosophy",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Philosophy"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "https://zhongchenle.netlify.app/projects",
			"color": "rgba(214, 214, 214, 0.7)",
			"font": "200 14px/180% \"Public Sans\", sans-serif",
			"text-decoration-line": "initial",
			"target": "_self",
			"display": "block",
			"children": "Projects"
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
	"text3": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"children": "Project"
		}
	},
	"text4": {
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
				<br />
				See this project on{" "}
				<Link
					href="https://www.behance.net/jairah"
					target="_blank"
					text-decoration-line="initial"
					color="rgba(214, 214, 214, .7)"
					font="400 14px/21px &quot;Public Sans&quot;, sans-serif"
				>
					Behance
				</Link>
				.
			</Span>
		}
	}
};

const Foot = props => {
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
			<Text {...override("text1")} />
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text2")} />
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
		</Box>
		<Box {...override("box3")}>
			<Text {...override("text3")} />
			<Text {...override("text4")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Foot, { ...Section,
	defaultProps,
	overrides
});
export default Foot;