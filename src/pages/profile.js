import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Strong, Em } from "@quarkly/widgets";
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
		<Components.Finalnav margin="0PX 0px 24px 0px">
			<Override slot="button" font="normal normal 300 16px/1.5 --fontFamily-googlePublicSans" color="#c58d2d " />
		</Components.Finalnav>
		<Box
			width="100%"
			display="grid"
			grid-template-columns="repeat(3, 1fr) .5fr 1fr 1fr"
			grid-auto-rows="120px 50px 50px 50px 50px 50px"
			height="100%"
			min-height="80vh"
			md-grid-template-rows="120px 25px  25px  25px  25px  25px"
		>
			<Image
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/PROFILE_1.png?v=2021-11-21T16:34:36.275Z"
				grid-column="2 / span 2"
				grid-row="1 / span 4"
				border-radius="25px"
				width="70%"
				justify-self="center"
				align-self="start"
				sm-margin="auto auto auto auto"
			/>
			<Text
				grid-column="4 / span 2"
				font="52px --fontFamily-googlePlayfairDisplay"
				color="#c58d2d"
				align-self="center"
				grid-row="1"
				justify-self="start"
				lg-font="42px --fontFamily-googlePlayfairDisplay"
				sm-margin="16px 0px 16px 0px"
			>
				Zhong Chenle
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="7"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
				sm-font="200 10px --fontFamily-googlePublicSans"
			>
				Beijing Contemporary Music Academy{"\n\n"}
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="6"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
				sm-font="200 10px --fontFamily-googlePublicSans"
			>
				INFP
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="5"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
				sm-font="200 10px --fontFamily-googlePublicSans"
			>
				0
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="4"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
				sm-font="200 10px --fontFamily-googlePublicSans"
			>
				November 22, 2001
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="3"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
				sm-font="200 10px --fontFamily-googlePublicSans"
			>
				Shanghai, China
			</Text>
			<Text
				grid-column="5"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="2"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
				sm-font="200 10px --fontFamily-googlePublicSans"
			>
				Zhong Chenle / 
钟辰乐{"\n\n"}
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="7"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
				sm-font="300 10px --fontFamily-googlePublicSans"
			>
				Education
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="6"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
				sm-font="300 10px --fontFamily-googlePublicSans"
			>
				MBTI
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="5"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
				sm-font="300 10px --fontFamily-googlePublicSans"
			>
				Blood Type
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="4"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
				sm-font="300 10px --fontFamily-googlePublicSans"
			>
				Birthdate
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="3"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
				sm-font="300 10px --fontFamily-googlePublicSans"
			>
				Birthplace
			</Text>
			<Text
				grid-column="4"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="2"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
				sm-font="300 10px --fontFamily-googlePublicSans"
			>
				Birthname
			</Text>
		</Box>
		<Box
			width="100%"
			display="grid"
			grid-template-columns="1fr .5fr repeat(3, 1fr)"
			grid-auto-rows="120px 50px 50px 50px 50px 50px"
			height="100%"
			min-height="100vh"
			md-grid-template-rows="120px  25px 25px 25px 25px 25px"
			border-radius="25px"
		>
			<Image
				src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/PROFILE_2.png?v=2021-11-22T11:52:05.851Z"
				grid-column="4 / span 2"
				grid-row="1 / span 6"
				border-radius="25px"
				width="70%"
				justify-self="start"
				align-self="start"
			/>
			<Text
				grid-column="2 / span 2"
				font="52px --fontFamily-googlePlayfairDisplay"
				color="#c58d2d"
				align-self="center"
				grid-row="1"
				justify-self="start"
				lg-font="42px --fontFamily-googlePlayfairDisplay"
			>
				Chenle in NCT
			</Text>
			<Text
				grid-column="3"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="7"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
			>
				<Link
					href="https://www.weibo.com/u/7403383160"
					target="_blank"
					color="rgba(214, 214, 214)"
					text-decoration-line="initial"
					cursor="alias"
					lg-font="200 12px --fontFamily-googlePublicSans"
				>
					KHCHENLE
				</Link>
			</Text>
			<Text
				grid-column="3"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="6"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
			>
				Main Vocal
			</Text>
			<Text
				grid-column="3"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="5"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
			>
				October 12, 2020
			</Text>
			<Text
				grid-column="3"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="4"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
			>
				August 25, 2016
			</Text>
			<Text
				grid-column="3"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="3"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
			>
				January 1, 2010
			</Text>
			<Text
				grid-column="3"
				font="100 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="2"
				align-self="start"
				justify-self="start"
				color="rgba(214, 214, 214)"
				margin="8px 0px 8px 0px"
				lg-font="200 12px --fontFamily-googlePublicSans"
			>
				NCT Dream
				<br />
				NCT U
			</Text>
			<Text
				grid-column="2"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="7"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
			>
				Weibo
			</Text>
			<Text
				grid-column="2"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="6"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
			>
				Position
			</Text>
			<Text
				grid-column="2"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="5"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
			>
				NCT U Debut
			</Text>
			<Text
				grid-column="2"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="4"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
			>
				NCT Dream Debut
			</Text>
			<Text
				grid-column="2"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="3"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
			>
				Solo Debut
			</Text>
			<Text
				grid-column="2"
				font="200 16px &quot;Public Sans&quot;, sans-serif"
				grid-row="2"
				align-self="start"
				justify-self="start"
				margin="8px 0px 8px 0px"
				lg-font="300 12px --fontFamily-googlePublicSans"
			>
				Units
			</Text>
		</Box>
		<Components.QuarklycommunityKitTimeline color="#ececec" font="200 1em --fontFamily-googlePublicSans" padding="0px 10% 0px 10%" margin="50px 0px 50px 0px">
			<Override slot="Item" color="#ffffff" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Title" color="#ffffff" font="200 24px --fontFamily-googlePublicSans" lg-font="200 18px --fontFamily-googlePublicSans" />
			<Override slot="Dates" color="#c58d2d" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Descr" color="rgba(214, 214, 214)" font="100 14px/180% --fontFamily-googlePublicSans" lg-font="100 12px/180% --fontFamily-googlePublicSans" />
			<Override slot="Point" color="#c58d2d" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Line" color="#ffffff" background="#ffffff" font="200 1em --fontFamily-googlePublicSans" />
			<Override slot="Dates 0">
				2016 - present{"\n\n"}
			</Override>
			<Override slot="Title 0">
				Debut to Current Activites
			</Override>
			<Override slot="Descr 0">
				<Strong>
					2016{"  "}
				</Strong>
				·   At only the age of 14, he began his career in South Korea by debuting as a member of NCT Dream, a sub-unit of NCT.  He debuted in NCT after only 4 months of training.
				<br />
				<br />
				<Strong>
					2020{"  "}
				</Strong>
				·   On April 30, it was announced via Beijing Contemporary Music Academy's official Weibo.com account that Chenle, alongside fellow bandmate Renjun, officially graduated from the school with the class of 2020. Chenle became the main DJ of the radio show{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Yuedong Seoul
				</Em>
				{" "}on October 12, 2020.{" "}
				<br />
				<br />
				<Strong>
					2021{"  "}
				</Strong>
				·   
In February,  Chenle was featured on IMLAY's song "Too Good", from his 4th EP "UTOPIA".{"\n\n\n\n\n\n"}
			</Override>
			<Override slot="Dates 1">
				2009 - 2005
			</Override>
			<Override slot="Title 1">
				Continued Success in the Music Industry
			</Override>
			<Override slot="Dates 2">
				2019 to 2011
			</Override>
			<Override slot="Dates 3">
				before 2009{"\n\n"}
			</Override>
			<Override slot="Descr 1">
				<Strong>
					2012{"  "}
				</Strong>
				·   In December, Zhong participated in the First Plenary Session of the Huangpu District of Shanghai and elected the district chief with the highest votes.{"\n"}
				<br />
				<br />
				<Strong>
					{"\n"}2013{"  "}
				</Strong>
				·  His first known acting minor roles were in 2013 when he was 11 years old, he was featured in Chinese Drama, The Queen of SOP 2.{" "}
				<br />
				<br />
				<Strong>
					{"\n\n"}2014{"  "}
				</Strong>
				·   He was the Chinese Ambassador at The Musical Summit, an international multicultural show created by Elkin which took place in Buenos Aires City in August 2014 where he performed "The Dragon's Romance", a song Elkin wrote especially for him. Held a solo concert at the Shanghai Concert Hall.{"\n\n"}
				<br />
				{"\n\n"}
			</Override>
			<Override slot="Descr 2">
				<Strong>
					{"\n"}2009{"  "}
				</Strong>
				·   Zhong participated in the Hajj children's channel held by Yueyue Elf Vs Season Trial and won the runner-up and Elf Genie Award.
				<br />
				<br />
				<Strong>
					2010{"  "}
				</Strong>
				·   Participated in the National Chinese Young Talent Selection activities and won the vocal group a gold medal. On 16 June 2011, as a part of the starring actress Xiao Jiabin attending the second Nie Er Music Week opening ceremony (Shanghai Grand Theater), Zhong led the audience of thousands to sing the national anthem.
				<br />
				<br />
				<Strong>
					2011
				</Strong>
				{"  "}·   Perform the song Memory, from Andrew Lloyd Webber's musical, Cats, at the Golden Hall of Vienna - at the time he was the youngest singer to have ever held a solo performance there. Released his second solo album My Wings. Participated in the opening ceremony of Shanghai International Children's Art Festival on the Shanghai Grand Stage and also the Closing Ceremony of Shanghai International Children's Art Festival at Shanghai International Convention Center{"\n\n\n\n"}
			</Override>
			<Override slot="Title 2">
				The First Rise to Stardom
			</Override>
			<Override slot="Title 3">
				Early Life
			</Override>
			<Override slot="Descr 3">
				<Strong>
					2008{"  "}
				</Strong>
				·   In 2008, he was admitted to Shanghai Little Flute Art Troupe and studied vocal music with Huang Jing.{"\n"}
				<br />
				<br />
				<Strong>
					{"\n"}2006{"  "}
				</Strong>
				·   In 2006, he entered the small television station Shanghai Ying Siu Sing School and went to dance classes.{"\n"}
				<br />
				<br />
				<Strong>
					{"\n"}2001{"  "}
				</Strong>
				·   Chenle was born in Shanghai, China on 22 November 2001.{"\n\n"}
			</Override>
		</Components.QuarklycommunityKitTimeline>
		<Components.FinalFooter />
		<Components.QuarklycommunityKitBackToTop showAfter="1920px" />
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