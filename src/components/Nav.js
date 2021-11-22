import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Button, Box } from "@quarkly/widgets";
const defaultProps = {
	"display": "grid",
	"grid-template-columns": "1fr repeat(2, 2fr) repeat(3,2fr)",
	"grid-column": "1 / span 6",
	"grid-row": "1",
	"border-color": "#c58d2d",
	"border-width": "0 0 1px 0",
	"border-style": "solid",
	"left": "0px",
	"right": "0.48399999999986676px",
	"bottom": "1876.41px",
	"top": "985.594px",
	"width": "inherit",
	"quarkly-title": "NAV",
	"sm-margin": "0px 0px 24px 30p",
	"margin": "24px 0px 24px 0px",
	"height": "80px",
	"padding": "0px 0px 0 0px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "48px",
			"height": "48px",
			"src": "https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z",
			"display": "block",
			"margin": "auto auto auto auto",
			"grid-row": "1",
			"grid-column": "1",
			"sm-margin": "auto auto auto 30px",
			"sm-width": "32px",
			"sm-height": "32px",
			"md-margin": "auto auto auto 32px",
			"md-width": "32px",
			"md-height": "32px"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"grid-column": "4",
			"background": "rgba(0, 119, 204, 0)",
			"font": "normal normal 100 16px/1.5 --fontFamily-googlePublicSans",
			"color": "rgba(225, 230, 223, 0.7)",
			"sm-font": "normal normal 100 10px/1.5 --fontFamily-googlePublicSans",
			"md-font": "normal normal 100 12px/1.5 --fontFamily-googlePublicSans",
			"active-color": "#c58d2d",
			"active-font": "normal normal 300 16px/1.5 --fontFamily-googlePublicSans",
			"focus-font": "normal normal 300 16px/1.5 --fontFamily-googlePublicSans",
			"focus-color": "#c58d2d",
			"href": "https://zhongchenle.netlify.app/profile",
			"type": "link",
			"align-self": "center",
			"justify-self": "center",
			"text-decoration-line": "initial"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"grid-column": "5",
			"background": "rgba(0, 119, 204, 0)",
			"sm-font": "normal normal 100 10px/1.5 --fontFamily-googlePublicSans",
			"md-font": "normal normal 100 12px/1.5 --fontFamily-googlePublicSans",
			"font": "normal normal 100 16px/1.5 --fontFamily-googlePublicSans",
			"color": "rgba(225, 230, 223, 0.7)",
			"focus-color": "#c58d2d",
			"href": "https://zhongchenle.netlify.app/philosophy",
			"target": "_blank"
		}
	},
	"button2": {
		"kind": "Button",
		"props": {
			"grid-column": "6",
			"background": "rgba(0, 119, 204, 0)",
			"font": "normal normal 100 16px/1.5 --fontFamily-googlePublicSans",
			"color": "rgba(225, 230, 223, 0.7)",
			"sm-font": "normal normal 100 10px/1.5 --fontFamily-googlePublicSans",
			"md-font": "normal normal 100 12px/1.5 --fontFamily-googlePublicSans",
			"focus-color": "#c58d2d",
			"focus-font": "normal normal 300 16px/1.5 --fontFamily-googlePublicSans",
			"children": "PROJECTS",
			"href": "https://zhongchenle.netlify.app/projects",
			"target": "_blank"
		}
	}
};

const Nav = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Button {...override("button")}>
			PROFILE
		</Button>
		<Button {...override("button1")}>
			PHILOSOPHY
		</Button>
		<Button {...override("button2")}>
			WORKS
		</Button>
		{children}
	</Box>;
};

Object.assign(Nav, { ...Box,
	defaultProps,
	overrides
});
export default Nav;