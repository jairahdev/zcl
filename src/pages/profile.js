import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"profile"} />
		<Helmet>
			<title>
				Zhong Chenle
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/Favicon.png?v=2021-11-21T13:45:50.370Z"} type={"image/x-icon"} />
		</Helmet>
		<Box
			height="100vh"
			min-height="100vh"
			display="grid"
			grid-template-columns="1fr 1fr 1fr .5fr 1fr 1fr"
			grid-template-rows="1fr 1fr repeat(10,.5fr)"
			color="rgba(214, 214, 214)"
		>
			<Components.Nav margin="0 0px 24px 0px" grid-column="1 / span6" grid-row="1" />
			<Text grid-column="4 / span 2" font="32px --fontFamily-googlePlayfairDisplay" color="#c58d2d" align-self="center">
				Zhong Chenle
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="9"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				NCT Dream
				<br />
				NCT U
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="8"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				Beijing Contemporary Music Academy{"\n\n"}
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="7"
				align-self="center"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				INFP
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="6"
				align-self="center"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				0
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="5"
				align-self="center"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				November 22, 2001
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="4"
				align-self="center"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				Shanghai, China
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="3"
				align-self="center"
				justify-self="start"
				color="rgba(214, 214, 214)"
			>
				Zhong Chenle / 
钟辰乐{"\n\n"}
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="9"
				align-self="center"
				justify-self="start"
			>
				Units
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="8"
				align-self="center"
				justify-self="start"
			>
				Education
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="7"
				align-self="center"
				justify-self="start"
			>
				MBTI
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="6"
				align-self="center"
				justify-self="start"
			>
				Blood Type
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="5"
				align-self="center"
				justify-self="start"
			>
				Birthdate
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="4"
				align-self="center"
				justify-self="start"
			>
				Birthplace
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="3"
				align-self="center"
				justify-self="start"
			>
				Birthname
			</Text>
			<Image
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/PROFILE_1.png?v=2021-11-21T16:34:36.275Z"
				grid-column="2 / span 2"
				grid-row="2 / span 4"
				border-radius="25px"
				width="70%"
				justify-self="center"
				align-self="start"
			/>
		</Box>
		<Components.QuarklycommunityKitTimeline color="#ececec" font="200 1em --fontFamily-googlePublicSans" padding="0px 10% 0px 10%" margin="50px 0px 50px 0px">
			<Override slot="Item" color="#ffffff" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Title" color="#ffffff" font="200 24px --fontFamily-googlePublicSans" />
			<Override slot="Dates" color="#c58d2d" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Descr" color="rgba(214, 214, 214)" font="100 14px/180% --fontFamily-googlePublicSans" />
			<Override slot="Point" color="#c58d2d" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Line" color="#ffffff" background="#ffffff" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Dates 0">
				2006 - 2008
			</Override>
			<Override slot="Title 0">
				Early Education
			</Override>
			<Override slot="Descr 0">
				In 2006, he entered the small television station Shanghai Ying Siu Sing School and went to dance classes. In 2008, he was admitted to Shanghai Little Flute Art Troupe and studied vocal music with Huang Jing.{"\n\n"}
			</Override>
			<Override slot="Dates 1">
				2009 - 2005
			</Override>
			<Override slot="Title 1">
				Solo Activities
			</Override>
			<Override slot="Dates 2">
				2016 - present
			</Override>
			<Override slot="Dates 3">
				2021
			</Override>
			<Override slot="Descr 1">
				2009  

·

  Zhong participated in the Hajj children's channel held by Yueyue Elf Vs Season Trial and won the runner-up and Elf Genie Award.{"\n\n"}
			</Override>
		</Components.QuarklycommunityKitTimeline>
		<Components.Footer />
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
				{"/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #151515; \n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background:rgb(225,230,223); \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #c58d2d; \n}\n\n/* box scroll */\nli::-webkit-scrollbar {\n  width: 5px;}\nli::-webkit-scrollbar-track {\n  background: #151515;}\nli::-webkit-scrollbar-thumb {\n  background:#151515;}\nli::-webkit-scrollbar-thumb:hover {\n  background: #151515;}"}
			</style>
		</RawHtml>
	</Theme>;
});