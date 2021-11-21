import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Icon, Box, Section, Button, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="url(https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/4.png?v=2021-11-20T15:31:12.863Z) 40% 40%,linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			quarkly-title="COVER"
			height="100vh"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text color="rgba(135, 135, 135, 0.32)" font="300 16px/24px ">
				MADE BY STUDIO FUGUE
			</Text>
			<Image
				width="40%"
				height="40%"
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z"
				text-align="center"
				display="block"
				margin="15% 0px 0px 0px"
			/>
			<Box
				text-align="center"
				margin="96px 0 0 0"
				border-color="#c58d2d"
				width="56px"
				height="56px"
				hover-border-radius="100%"
				hover-border-color="rgba(225, 230, 223, 1)"
				min-width="56px"
				min-height="56px"
				hover-transition="all 0.6s ease-in-out 0s"
			>
				<Icon
					category="md"
					margin="0 auto"
					icon={MdArrowDownward}
					border-color="#c58d2d"
					border-width="2px"
					border-style="solid"
					border-radius="100%"
					padding="10px 10px 10px 10px"
					color="#c58d2d"
					hover-color="rgba(225, 230, 223, 1)"
					hover-background="c58d2d"
					hover-border-color="rgba(225, 230, 223, 1)"
					align-items="center"
					width="56px"
					height="56px"
					min-width="56px"
					min-height="56px"
				/>
			</Box>
		</Section>
		<Section
			width="100%"
			min-height="100vh"
			min-width="100%"
			height="100vh"
			quarkly-title="Profile"
		>
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="1fr repeat(2, 2fr)  1fr repeat(2, 2fr)"
				margin="0px 0 0px 0"
				width="100%"
				min-width="inherit"
				min-height="inherit"
				height="inherit"
				grid-template-rows="repeat(2,1fr) 2fr repeat(2, 1fr)"
			/>
			<Box
				display="grid"
				grid-template-columns="1fr repeat(2, 2fr) repeat(3,2fr)"
				grid-column="1 / span 6"
				grid-row="1"
				border-color="#c58d2d"
				border-width="0 0 1px 0"
				border-style="solid"
				height="64px"
				padding="0px 0px 24px 0px"
				left="0px"
				right="0.48399999999986676px"
				bottom="1876.41px"
				top="985.594px"
				width="inherit"
				quarkly-title="NAV"
				margin="0px 0px 24px 0px"
			>
				<Image
					width="48px"
					height="48px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z"
					display="block"
					margin="auto auto auto auto"
					grid-row="1"
					grid-column="1"
				/>
				<Button grid-column="4" background="rgba(0, 119, 204, 0)" font="normal normal 100 16px/1.5 --fontFamily-googlePublicSans" color="rgba(225, 230, 223, 0.7)">
					PROFILE
				</Button>
				<Button grid-column="5" background="rgba(0, 119, 204, 0)" font="normal normal 100 16px/1.5 --fontFamily-googlePublicSans" color="rgba(225, 230, 223, 0.7)">
					PHILOSOPHY
				</Button>
				<Button grid-column="6" background="rgba(0, 119, 204, 0)" font="normal normal 100 16px/1.5 --fontFamily-googlePublicSans" color="rgba(225, 230, 223, 0.7)">
					WORKS
				</Button>
			</Box>
			<Box
				background="transparent"
				grid-row="2"
				align-self="center"
				width="100%"
				justify-self="stretch"
				grid-column="2 / span 2"
			>
				<Text
					as="h1"
					margin="8px 0px 32px"
					font="72px --fontFamily-googlePlayfairDisplay"
					md-font="--headline2"
					color="#c58d2d"
					max-width="850px"
				>
					Zhong Chenle
				</Text>
			</Box>
			<Box
				background="transparent"
				grid-row="3 "
				width="100%"
				font="16px/140% &quot;Public Sans&quot;, sans-serif"
				justify-self="stretch"
				padding="0px 4% 0px 0px"
				grid-column="2 / span 2"
				align-self="start"
				margin="-20px 0px 0px 0px"
			>
				<Text margin="0px" text-align="justify" color="rgba(225, 230, 223, 0.7)" font="100 14px/180% &quot;Public Sans&quot;, sans-serif">
					Born on the 22nd of November, 2001, the Chinese performer has been gracing our eyes with his talents ever since he was a child. With an extensive discography and filmography including his solo albums and movie appearances, Zhong Chenle has proven to be quite the versatile artist. Ever since he claimed the title of the youngest singer to hold a solo performance at the Golden Hall of Vienna in Austria, the music star has been steadily grabbing everyone’s hearts. Now a member of Korean Pop group NCT Dream (a sub-unit of NCT), Chenle continuously impresses us with his heavenly vocals and charming moves.
				</Text>
				<Button
					font="italic 100 14px/180% &quot;Public Sans&quot;, sans-serif"
					color="rgba(225, 230, 223, 0.9)"
					background="rgba(255, 255, 255, 0)"
					padding="8px 24px 8px 0"
					hover-font="italic 400 14px/180% &quot;Public Sans&quot;, sans-serif"
					hover-letter-spacing=".5px"
					hover-transition="all 0.3s ease-in-out 0s"
					transition="all 0.3s ease-in-out 0s"
					cursor="help"
				>
					Learn more 
→{" "}
				</Button>
			</Box>
			<Box
				background="transparent"
				grid-column="5 / span 2"
				grid-row="2 / span 4"
				text-align="left"
				margin="auto 0px auto 0px"
				width="auto"
				height="100%"
			>
				<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/LANDING_1.png?v=2021-11-20T18:14:10.972Z" border-radius="50px" height="100%" />
			</Box>
			<Box
				background="transparent"
				height="80px"
				width="90%"
				align-self="center"
				border-color="#c58d2d"
				border-width="1px"
				border-style="solid"
				justify-self="stretch"
				grid-column="2"
				order="-1"
				display="flex"
				grid-row="4"
				hover-background="#c58d2d"
				hover-border-color="none"
				hover-color="#151515"
				hover-transition="all .6s ease-in-out 0s"
				hover-border-width="0px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
				/>
				<Text display="inline" height="auto" margin="28px 0px 16px 25px" font="400 18px &quot;Public Sans&quot;, sans-serif">
					Singer
				</Text>
			</Box>
			<Box
				background="transparent"
				height="80px"
				width="90%"
				align-self="center"
				border-color="#c58d2d"
				border-width="1px"
				border-style="solid"
				justify-self="stretch"
				grid-column="3"
				order="-1"
				display="flex"
				grid-row="5"
				hover-background="#c58d2d"
				hover-border-color="none"
				hover-color="#151515"
				hover-transition="all .6s ease-in-out 0s"
				hover-border-width="0px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
				/>
				<Text display="inline" height="auto" margin="28px 0px 16px 25px" font="400 18px &quot;Public Sans&quot;, sans-serif">
					Performer
				</Text>
			</Box>
			<Box
				background="transparent"
				height="80px"
				width="90%"
				align-self="center"
				border-color="#c58d2d"
				border-width="1px"
				border-style="solid"
				justify-self="stretch"
				grid-column="2"
				order="-1"
				display="flex"
				grid-row="5"
				hover-background="#c58d2d"
				hover-border-color="none"
				hover-color="#151515"
				hover-transition="all .6s ease-in-out 0s"
				hover-border-width="0px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
				/>
				<Text display="inline" height="auto" margin="28px 0px 16px 25px" font="400 18px &quot;Public Sans&quot;, sans-serif">
					Radio Host
				</Text>
			</Box>
			<Box
				background="transparent"
				height="80px"
				width="90%"
				align-self="center"
				border-color="#c58d2d"
				border-width="1px"
				border-style="solid"
				justify-self="stretch"
				grid-column="3"
				order="-1"
				display="flex"
				grid-row="4"
				hover-background="#c58d2d"
				hover-border-color="none"
				hover-color="#151515"
				hover-transition="all .6s ease-in-out 0s"
				hover-border-width="0px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
				/>
				<Text display="inline" height="auto" margin="28px 0px 16px 25px" font="400 18px &quot;Public Sans&quot;, sans-serif">
					Dancer
				</Text>
			</Box>
		</Section>
		<Section
			height="100%"
			min-height="100vh"
			width="100%"
			min-width="100vh"
			align-items="center"
			justify-content="center"
			align-content="center"
			margin="50px 0 50px 0"
			quarkly-title="Philosophy"
		>
			<Override
				slot="SectionContent"
				display="grid"
				align-items="center"
				grid-template-rows="auto"
				margin="0px 10% 0px 10%"
				grid-template-columns="repeat(4, 1fr)"
				padding="0px 0px 0px 20px"
			/>
			<Image
				width="72px"
				height="72px"
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower_white.svg?v=2021-11-21T10:36:45.135Z"
				display="inline"
				color="#ffffff"
				grid-column="3"
				grid-row="1"
				z-index="1"
				justify-self="start"
				margin="0px 0px 0px -10px"
				hover-transform="rotate(42deg) scale(1.5)"
				hover-transition="all 0.6s ease-in-out 0s"
				transition="all 0.6s ease-in-out 0s"
			/>
			<Image
				width="70%"
				height="auto"
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/LANDING_2.png?v=2021-11-21T10:27:50.303Z"
				grid-column="1 / span 3"
				border-radius="5%"
				grid-row="1"
				justify-self="start"
			/>
			<Image
				width="100%"
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/LANDING_3.png?v=2021-11-21T10:26:17.375Z"
				text-align="left"
				display="inline-block"
				height="70%"
				grid-row="1"
				grid-column="3 / span 2"
			/>
			<Button
				font="italic 100 14px/180% &quot;Public Sans&quot;, sans-serif"
				color="rgba(225, 230, 223, 0.9)"
				background="rgba(255, 255, 255, 0)"
				grid-row="1"
				justify-self="start"
				grid-column="1"
				align-self="end"
				margin="-50px 0px 20px 0px"
				transition="all 0.3s ease-in-out 0s"
				hover-transition="all 0.3s ease-in-out 0s"
				cursor="help"
				hover-letter-spacing=".5 px"
				hover-font="italic 300 14px/180% &quot;Public Sans&quot;, sans-serif"
			>
				Read more 
→{" "}
			</Button>
		</Section>
		<Section
			margin="50px 0 50px 0"
			min-height="100vh"
			min-width="100vh"
			width="100%"
			height="100%"
		>
			<Override slot="SectionContent" display="grid" grid-template-columns="repeat (3,2fr)" grid-template-rows="1fr" />
			<Image width="100%" src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_6.png?v=2021-11-21T13:28:24.923Z" grid-column="2" grid-row="1" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_4.png?v=2021-11-21T13:21:23.953Z" grid-column="2" grid-row="3" width="100%" />
			<Text
				grid-row="2"
				grid-column="3"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
			>
				You Are There (2014)
			</Text>
			<Text
				grid-row="5"
				grid-column="3"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
			>
				Free Love (2021)
			</Text>
			<Button
				font="italic 100 14px/180% &quot;Public Sans&quot;, sans-serif"
				color="rgba(225, 230, 223, 0.9)"
				background="rgba(255, 255, 255, 0)"
				grid-row="6"
				justify-self="end"
				grid-column="1 / span 3"
				align-self="end"
				margin="30px 0px 0px 0px"
				transition="all 0.3s ease-in-out 0s"
				hover-transition="all 0.3s ease-in-out 0s"
				cursor="help"
				hover-letter-spacing=".5 px"
				hover-font="italic 300 14px/180% &quot;Public Sans&quot;, sans-serif"
			>
				View all  →{" "}
			</Button>
			<Text
				grid-row="2"
				grid-column="2"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
			>
				My Wing (2011)
			</Text>
			<Text
				grid-row="5"
				grid-column="2"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
			>
				Too Good (2021)
			</Text>
			<Text
				grid-row="2"
				grid-column="1"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
			>
				Tomorrow (2010)
			</Text>
			<Text
				grid-row="5"
				grid-column="1"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
			>
				12월 24일 (2020)
			</Text>
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_8.png?v=2021-11-21T13:42:59.579Z" grid-column="3" grid-row="3" width="100%" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_5.png?v=2021-11-21T13:25:27.902Z" grid-row="1" width="100%" grid-column="3" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_3.png?v=2021-11-21T13:20:55.450Z" grid-column="1" grid-row="1" width="100%" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_7.png?v=2021-11-21T13:42:48.142Z" grid-column="1" grid-row="3" width="100%" />
		</Section>
		<Section padding="100px 0 24px 0" quarkly-title="FOOTER">
			<Override slot="SectionContent" display="grid" grid-template-columns="1fr 2fr repeat(2, 1fr)" />
			<Box grid-column="1" grid-row="1" align-self="center" justify-self="center">
				<Image width="64px" height="64px" src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z" margin="auto auto auto auto" />
			</Box>
			<Box grid-column="4" grid-row="1" padding="10px 10px 10px 10px" background="none">
				<Text>
					Acknowledgements
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					smtown-nctzens for info
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					FY!NCT for images
				</Text>
			</Box>
			<Box grid-column="3" grid-row="1" padding="10px 10px 10px 10px" background="none">
				<Text>
					Navigation
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					Home
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					Profile
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					Philosophy
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					Works
				</Text>
			</Box>
			<Box grid-column="2" grid-row="1" padding="10px 10px 10px 10px" background="none">
				<Text>
					Project
				</Text>
				<Text color="rgba(225, 230, 223, 0.7)" font="300 14px &quot;Public Sans&quot;, sans-serif">
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						© Jairah  |  Website Design, Copy, and Visual Design
						<br />
						<br />
						See this project on Behance and Tumblr.
						<br />
						<br />
						Disclaimer: Fair use keme
					</Span>
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6195d547255a6d001e9c5f48"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<style place={"endOfHead"} rawKey={"6199247c77612864da8169bc"}>
				{"@font-face {\n    font-family: 'Abygaer';\n    src: url('https://raw.githubusercontent.com/jairahdev/zcl/blob/main/Abygaer%20Regular.otf');\n} "}
			</style>
			<style place={"endOfBody"} rawKey={"6199386aadedc8ee83d08291"}>
				{"::selection {\n  color: #151515;\n  background-color: #c58d2d;\n}"}
			</style>
			<style place={"endOfHead"} rawKey={"619a25be4a02fb51028f13bf"}>
				{"img { \n  -webkit-user-drag: none; \n  -khtml-user-drag: none; \n  -moz-user-drag: none; \n  -o-user-drag: none; \n  user-drag: none; \n}"}
			</style>
		</RawHtml>
	</Theme>;
});