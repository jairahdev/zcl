import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Box, Text, Span, Section } from "@quarkly/widgets";
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
			"font": "300 14px \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"children": "smtown-nctzens for info",
			"color": "rgba(214, 214, 214, 0.7)"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "300 14px \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"children": "FY!NCT for images",
			"color": "rgba(214, 214, 214, 0.7)"
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
	"text3": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"children": "Navigation"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "300 14px \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"children": "Home",
			"color": "rgba(214, 214, 214, 0.7)"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "300 14px \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"children": "Profile",
			"color": "rgba(214, 214, 214, 0.7)"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "300 14px \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"children": "Philosophy",
			"color": "rgba(214, 214, 214, 0.7)"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "300 14px \"Public Sans\", sans-serif",
			"md-font": "300 12px \"Public Sans\", sans-serif",
			"children": "Works",
			"color": "rgba(214, 214, 214, 0.7)"
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
	"text8": {
		"kind": "Text",
		"props": {
			"md-font": "14px \"Public Sans\", sans-serif",
			"children": "Project"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"children": <Span
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				md-font="300 12px &quot;Public Sans&quot;, sans-serif"
			>
				© Jairah  |  Website Design, Copy, and Visual Design
				<br />
				<br />
				See this project on Behance and Tumblr.
				<br />
				<br />
				Disclaimer: Fair use keme
			</Span>,
			"font": "200 14px \"Public Sans\", sans-serif",
			"color": "rgba(214, 214, 214, 0.7)"
		}
	}
};

const Footer = props => {
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
			<Text {...override("text2")} />
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text3")} />
			<Text {...override("text4")} />
			<Text {...override("text5")} />
			<Text {...override("text6")} />
			<Text {...override("text7")} />
		</Box>
		<Box {...override("box3")}>
			<Text {...override("text8")} />
			<Text {...override("text9")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;