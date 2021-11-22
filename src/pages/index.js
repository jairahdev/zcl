import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Icon, Box, Section, Button, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Zhong Chenle
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/Favicon.png?v=2021-11-21T13:45:50.370Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="url(https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/4.png?v=2021-11-20T15:31:12.863Z) 40% 40%"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			quarkly-title="COVER"
			height="100vh"
			min-height="100vh"
			sm-align-content="center"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text color="rgba(135, 135, 135, 0.32)" font="300 16px/24px " md-font="300 12px/24px " sm-font="100 12px --fontFamily-googlePublicSans">
				behance.net/jairah
			</Text>
			<Image
				width="40%"
				height="40%"
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z"
				text-align="center"
				display="block"
				margin="15% 0px 0px 0px"
				lg-height="100%"
				lg-width="100%"
				md-height="512px"
				md-width="512px"
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
				md-width="20%"
				md-height="20%"
				sm-min-width="32px"
				sm-min-height="32px"
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
					md-height="20%"
					md-width="20%"
					sm-min-width="32px"
					sm-min-height="32px"
				/>
			</Box>
		</Section>
		<Section
			width="100%"
			min-height="100vh"
			min-width="100%"
			height="100vh"
			quarkly-title="Profile"
			padding="0 0 24px 0"
			sm-height="120vh"
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
				left="0px"
				right="0.48399999999986676px"
				bottom="1876.41px"
				top="985.594px"
				width="inherit"
				quarkly-title="NAV"
				sm-margin="0px 0px 24px 30p"
				margin="24px 0px 24px 0px"
				height="80px"
				padding="0px 0px 0 0px"
				md-margin="0px 0px 24px 0px"
			>
				<Button
					grid-column="4"
					background="rgba(0, 119, 204, 0)"
					font="normal normal 100 16px/1.5 --fontFamily-googlePublicSans"
					color="rgba(225, 230, 223, 0.7)"
					sm-font="normal normal 100 10px/1.5 --fontFamily-googlePublicSans"
					md-font="normal normal 100 12px/1.5 --fontFamily-googlePublicSans"
					active-color="#c58d2d"
					active-font="normal normal 300 16px/1.5 --fontFamily-googlePublicSans"
					focus-font="normal normal 300 16px/1.5 --fontFamily-googlePublicSans"
					focus-color="#c58d2d"
					href="https://zhongchenle.netlify.app/profile"
					type="link"
					align-self="center"
					justify-self="center"
					text-decoration-line="initial"
					target="_self"
				>
					PROFILE
				</Button>
				<Button
					grid-column="5"
					background="rgba(0, 119, 204, 0)"
					sm-font="normal normal 100 10px/1.5 --fontFamily-googlePublicSans"
					md-font="normal normal 100 12px/1.5 --fontFamily-googlePublicSans"
					font="normal normal 100 16px/1.5 --fontFamily-googlePublicSans"
					color="rgba(225, 230, 223, 0.7)"
					focus-color="#c58d2d"
					href="https://zhongchenle.netlify.app/philosophy"
					type="link"
					align-self="center"
					justify-self="center"
					text-decoration-line="initial"
					target="_self"
				>
					PHILOSOPHY
				</Button>
				<Button
					grid-column="6"
					background="rgba(0, 119, 204, 0)"
					font="normal normal 100 16px/1.5 --fontFamily-googlePublicSans"
					color="rgba(225, 230, 223, 0.7)"
					sm-font="normal normal 100 10px/1.5 --fontFamily-googlePublicSans"
					md-font="normal normal 100 12px/1.5 --fontFamily-googlePublicSans"
					focus-color="#c58d2d"
					focus-font="normal normal 300 16px/1.5 --fontFamily-googlePublicSans"
					href="https://zhongchenle.netlify.app/projects"
					align-self="center"
					justify-self="center"
					type="link"
					target="_self"
					text-decoration-line="initial"
				>
					WORKS
				</Button>
				<LinkBox grid-column="1" grid-row="1" href="https://zhongchenle.netlify.app/" target="_self">
					<Image
						width="48px"
						height="48px"
						src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/ZCL-white.svg?v=2021-11-20T16:12:54.507Z"
						display="block"
						margin="auto auto auto auto"
						grid-row="1"
						grid-column="1"
						sm-margin="auto auto auto 30px"
						sm-width="32px"
						sm-height="32px"
						md-margin="auto auto auto 32px"
						md-width="32px"
						md-height="32px"
						lg-margin="auto auto auto 50px"
					/>
				</LinkBox>
			</Box>
			<Box
				background="transparent"
				grid-row="2"
				align-self="center"
				width="100%"
				justify-self="stretch"
				grid-column="2 / span 2"
				font="72px --fontFamily-googlePlayfairDisplay"
			>
				<Text
					as="h1"
					margin="8px 0px 32px"
					font="72px --fontFamily-Abygaer"
					md-font="32px --fontFamily-googlePlayfairDisplay"
					color="#c58d2d"
					max-width="850px"
					lg-font="52px --fontFamily-googlePlayfairDisplay"
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
				lg-font="10px/140% &quot;Public Sans&quot;, sans-serif"
				md-font="8px/140% &quot;Public Sans&quot;, sans-serif"
				sm-font="6px/140% &quot;Public Sans&quot;, sans-serif"
			>
				<Text
					margin="0px"
					text-align="justify"
					color="rgba(214, 214, 214, 0.7)"
					font="100 14px/180% &quot;Public Sans&quot;, sans-serif"
					lg-font="100 12px/180% &quot;Public Sans&quot;, sans-serif"
					md-font="100 9px/180% &quot;Public Sans&quot;, sans-serif"
					sm-font="100 8px/180% &quot;Public Sans&quot;, sans-serif"
				>
					Born on the 22nd of November, 2001, the Chinese performer has been gracing our eyes with his talents ever since he was a child. With an extensive discography and filmography including his solo albums and movie appearances, Zhong Chenle has proven to be quite the versatile artist. Ever since he claimed the title of the youngest singer to hold a solo performance at the Golden Hall of Vienna in Austria, the music star has been steadily grabbing everyone’s hearts. Now a member of Korean Pop group NCT Dream (a sub-unit of NCT), Chenle continuously impresses us with his heavenly vocals and charming moves.
				</Text>
				<Button
					font="italic 100 14px/180% &quot;Public Sans&quot;, sans-serif"
					color="rgba(214, 214, 214, 0.9)"
					background="rgba(255, 255, 255, 0)"
					padding="8px 24px 8px 0"
					hover-font="italic 400 14px/180% &quot;Public Sans&quot;, sans-serif"
					hover-letter-spacing=".5px"
					hover-transition="all 0.3s ease-in-out 0s"
					transition="all 0.3s ease-in-out 0s"
					cursor="help"
					md-font="italic 100 10px/180% &quot;Public Sans&quot;, sans-serif"
					sm-hover-font="italic 400 10px/180% &quot;Public Sans&quot;, sans-serif"
					md-width="auto"
					md-hover-font="300 10px --fontFamily-googlePublicSans"
					md-hover-letter-spacing=".5px"
					md-letter-spacing="0px"
					href="https://zhongchenle.netlify.app/profile/"
					type="link"
					text-decoration-line="initial"
					target="_self"
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
				lg-align-self="center"
				lg-justify-self="start"
			>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/LANDING_1.png?v=2021-11-20T18:14:10.972Z"
					border-radius="25px"
					height="100%"
					sm-border-radius="5px"
					sm-height="30%"
					lg-height="70%"
					lg-margin="50px 0px 0px 0px"
				/>
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
				lg-height="60px"
				lg-margin="20px 0px 0px 0px"
				md-height="60px"
				sm-height="40px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
					md-width="24px"
					md-height="24px"
					sm-margin="auto 0px auto 10px"
					sm-width="12px"
					sm-height="12px"
				/>
				<Text
					display="inline"
					height="auto"
					margin="28px 0px 16px 25px"
					font="400 18px &quot;Public Sans&quot;, sans-serif"
					lg-margin="18PX 0px 16px 20px"
					lg-font="400 14px &quot;Public Sans&quot;, sans-serif"
					md-font="400 10px &quot;Public Sans&quot;, sans-serif"
					md-margin="22px 0px 16px 20px"
					sm-margin="14px 0px 16px 10px"
					sm-font="400 8px &quot;Public Sans&quot;, sans-serif"
				>
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
				lg-height="60px"
				md-height="60px"
				sm-height="40px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
					md-width="24px"
					md-height="24px"
					sm-margin="auto 0px auto 10px"
					sm-width="12px"
					sm-height="12px"
				/>
				<Text
					display="inline"
					height="auto"
					margin="28px 0px 16px 25px"
					font="400 18px &quot;Public Sans&quot;, sans-serif"
					lg-margin="18PX 0px 16px 20px"
					lg-font="400 14px &quot;Public Sans&quot;, sans-serif"
					md-font="400 10px &quot;Public Sans&quot;, sans-serif"
					md-margin="22px 0px 16px 20px"
					sm-margin="14px 0px 16px 10px"
					sm-font="400 8px &quot;Public Sans&quot;, sans-serif"
				>
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
				lg-height="60px"
				md-height="60px"
				sm-height="40px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
					md-width="24px"
					md-height="24px"
					sm-margin="auto 0px auto 10px"
					sm-width="12px"
					sm-height="12px"
				/>
				<Text
					display="inline"
					height="auto"
					margin="28px 0px 16px 25px"
					font="400 18px &quot;Public Sans&quot;, sans-serif"
					lg-margin="18PX 0px 16px 20px"
					lg-font="400 14px &quot;Public Sans&quot;, sans-serif"
					md-font="400 10px &quot;Public Sans&quot;, sans-serif"
					md-margin="22px 0px 16px 20px"
					sm-margin="14px 0px 16px 10px"
					sm-font="400 8px &quot;Public Sans&quot;, sans-serif"
				>
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
				lg-height="60px"
				lg-margin="20px 0px 0px 0px"
				md-height="60px"
				sm-height="40px"
			>
				<Image
					width="32px"
					height="32px"
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/flower.svg?v=2021-11-21T09:24:50.822Z"
					margin="auto 0px auto 20px"
					display="inline"
					md-width="24px"
					md-height="24px"
					sm-margin="auto 0px auto 10px"
					sm-width="12px"
					sm-height="12px"
				/>
				<Text
					display="inline"
					height="auto"
					margin="28px 0px 16px 25px"
					font="400 18px &quot;Public Sans&quot;, sans-serif"
					lg-margin="18PX 0px 16px 20px"
					lg-font="400 14px &quot;Public Sans&quot;, sans-serif"
					md-font="400 10px &quot;Public Sans&quot;, sans-serif"
					md-margin="22px 0px 16px 20px"
					sm-margin="14px 0px 16px 10px"
					sm-font="400 8px &quot;Public Sans&quot;, sans-serif"
				>
					Dancer
				</Text>
			</Box>
		</Section>
		<Section
			height="100vh"
			min-height="100vh"
			width="100%"
			min-width="100vh"
			align-items="center"
			justify-content="center"
			align-content="center"
			margin="50px 0 50px 0"
			quarkly-title="Philosophy"
			sm-min-width="100%"
			sm-height="100%"
			sm-min-height="100%"
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
				sm-width="64px"
				sm-height="64px"
				sm-margin="0px 0px 0px -20px"
				md-margin="0px 0px 0px -20px"
				md-hover-transform="scale(1.2)"
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
				color="rgba(214, 214, 214, 0.9)"
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
				md-font="italic 100 10px/180% &quot;Public Sans&quot;, sans-serif"
				md-margin="0px 0px 0px 0px"
				sm-margin="30px 0px -30px 0px"
				sm-padding="8px 5px 8px 5px"
				sm-width="auto"
				sm-hover-font="italic 300 10px/180% &quot;Public Sans&quot;, sans-serif"
				md-width="auto"
				md-hover-font="300 10px --fontFamily-googlePublicSans"
				md-hover-letter-spacing=".5px"
				md-letter-spacing="0px"
				type="link"
				href="https://zhongchenle.netlify.app/philosophy"
				target="_self"
				text-decoration-line="initial"
				lg-margin="0px 0px 0px 0px"
				lg-align-self="center"
				lg-grid-row="2"
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
			height="140vh"
			md-padding="24px 20px 24px 20px"
			quarkly-title="Works"
			sm-align-content="center"
			sm-align-items="center"
			sm-justify-content="center"
			sm-height="100%"
			sm-min-height="100%"
			sm-width="100%"
			sm-min-width="100%"
		>
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat (3,2fr)"
				grid-template-rows="1fr"
				sm-grid-template-rows="1fr"
			/>
			<Image width="100%" src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_6.png?v=2021-11-21T13:28:24.923Z" grid-column="2" grid-row="1" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_4.png?v=2021-11-21T13:21:23.953Z" grid-column="2" grid-row="3" width="100%" />
			<Text
				grid-row="2"
				grid-column="3"
				justify-self="auto"
				align-self="center"
				text-align="center"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				sm-font="200 12px &quot;Public Sans&quot;, sans-serif"
				sm-margin="16px 0px 16px 0px"
				md-font="200 14px &quot;Public Sans&quot;, sans-serif"
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
				sm-font="200 12px &quot;Public Sans&quot;, sans-serif"
				sm-margin="16px 0px 16px 0px"
				md-font="200 14px &quot;Public Sans&quot;, sans-serif"
			>
				Free Love (2021)
			</Text>
			<Button
				font="italic 100 14px/180% &quot;Public Sans&quot;, sans-serif"
				color="rgba(214, 214, 214, 0.9)"
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
				md-font="italic 100 10px/180% &quot;Public Sans&quot;, sans-serif"
				sm-width="auto"
				sm-hover-font="italic 300 10px/180% &quot;Public Sans&quot;, sans-serif"
				md-width="auto"
				md-hover-font="300 10px --fontFamily-googlePublicSans"
				md-hover-letter-spacing=".5px"
				md-letter-spacing="0px"
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
				sm-font="200 12px &quot;Public Sans&quot;, sans-serif"
				sm-margin="16px 0px 16px 0px"
				md-font="200 14px &quot;Public Sans&quot;, sans-serif"
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
				sm-font="200 12px &quot;Public Sans&quot;, sans-serif"
				sm-margin="16px 0px 16px 0px"
				md-font="200 14px &quot;Public Sans&quot;, sans-serif"
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
				sm-font="200 12px &quot;Public Sans&quot;, sans-serif"
				sm-margin="16px 0px 16px 0px"
				md-font="200 14px &quot;Public Sans&quot;, sans-serif"
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
				sm-font="200 12px &quot;Public Sans&quot;, sans-serif"
				sm-margin="16px 0px 16px 0px"
				md-font="200 14px &quot;Public Sans&quot;, sans-serif"
			>
				12월 24일 (2020)
			</Text>
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_8.png?v=2021-11-21T13:42:59.579Z" grid-column="3" grid-row="3" width="100%" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_5.png?v=2021-11-21T13:25:27.902Z" grid-row="1" width="100%" grid-column="3" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_3.png?v=2021-11-21T13:20:55.450Z" grid-column="1" grid-row="1" width="100%" />
			<Image src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_7.png?v=2021-11-21T13:42:48.142Z" grid-column="1" grid-row="3" width="100%" />
		</Section>
		<Components.FinalFooter sm-min-width="100%" sm-max-width="100%">
			<Override slot="link" />
			<Override slot="link5" />
			<Override slot="text3" />
			<Override slot="link1" />
			<Override slot="link2" />
			<Override slot="link3" />
			<Override slot="link4" />
			<Override slot="box4" />
		</Components.FinalFooter>
		<Components.QuarklycommunityKitBackToTop showAfter="1920px" showAlways={false} />
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
				{"@font-face {\n    font-family: 'Abygaer';\n    src: url('https://zhongchenle.netlify.app/fonts/Abygaer-Regular.otf');\n} "}
			</style>
			<style place={"endOfBody"} rawKey={"6199386aadedc8ee83d08291"}>
				{"::selection {\n  color: #151515;\n  background-color: #c58d2d;\n}"}
			</style>
			<style place={"endOfHead"} rawKey={"619a25be4a02fb51028f13bf"}>
				{"img { \n  -webkit-user-drag: none; \n  -khtml-user-drag: none; \n  -moz-user-drag: none; \n  -o-user-drag: none; \n  user-drag: none; \n}"}
			</style>
			<style place={"endOfHead"} rawKey={"619b330bb29696ccb45e780e"}>
				{"/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #151515; \n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background:rgb(225,230,223); \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #c58d2d; \n}\n\n\n\n/* box scroll */\nli::-webkit-scrollbar {\n  width: 5px;}\nli::-webkit-scrollbar-track {\n  background: #151515;}\nli::-webkit-scrollbar-thumb {\n  background:#151515;}\nli::-webkit-scrollbar-thumb:hover {\n  background: #151515;}"}
			</style>
		</RawHtml>
	</Theme>;
});