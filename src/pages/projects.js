import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Icon, Box, List, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiLink2, FiMusic, FiTv, FiHeadphones } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"projects"} />
		<Helmet>
			<title>
				Zhong Chenle
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/Favicon.png?v=2021-11-21T13:45:50.370Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Finalnav margin="0PX 0px 24px 0px">
			<Override slot="button2" color="#c58d2d " font="normal normal 300 16px/1.5 --fontFamily-googlePublicSans" />
		</Components.Finalnav>
		<Box
			display="grid"
			grid-template-columns="repeat(6,1fr)"
			grid-template-rows="repeat(24,1fr)"
			min-height="100vh"
			height="100vh"
			lg-font="12px &quot;Public Sans&quot;, sans-serif"
		>
			<Box
				display="grid"
				quarkly-title="template"
				grid-column="2 / span 4"
				grid-row="2 / span 5"
				height="inherit"
			>
				<Text
					grid-row="1"
					grid-column="1 /span 2"
					font="64px --fontFamily-googlePlayfairDisplay"
					color="#c58d2d "
					align-self="end"
					lg-font="54px --fontFamily-googlePlayfairDisplay"
					md-font="32px --fontFamily-googlePlayfairDisplay"
					sm-font="24px --fontFamily-googlePlayfairDisplay"
				>
					Discography
				</Text>
				<Text
					grid-row="1"
					grid-column="3/ span 2"
					font="200 12px --fontFamily-googlePublicSans"
					color="rgba(214, 214, 214, 0.7)"
					align-self="end"
					justify-self="end"
					sm-font="200 8px --fontFamily-googlePublicSans"
				>
					Solo Albums, Singles, Official Covers and Featurings
				</Text>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_3.png?v=2021-11-21T13:20:55.450Z"
					grid-column="1"
					grid-row="2"
					width="100%"
					height="max-content"
					display="inline-block"
					color="none"
				/>
				<Box
					grid-column="1"
					grid-row="3"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiLink2} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						<Link
							href="https://www.youtube.com/watch?v=Hu19pnL9Nxg"
							target="_blank"
							link-color="#efefef"
							color="rgb(225,230,223)"
							text-decoration-line="initial"
							cursor="alias"
							visited-border-color="rgba(225, 230, 223, 0.5)"
							lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
						>
							Tomorrow (2010)
						</Link>
					</Text>
				</Box>
				<Box
					grid-column="2"
					grid-row="3"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiLink2} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						<Link
							href="https://www.youtube.com/watch?v=FKBUXXid2Jk"
							target="_blank"
							link-color="#efefef"
							color="rgb(225,230,223)"
							text-decoration-line="initial"
							cursor="alias"
							visited-border-color="rgba(225, 230, 223, 0.5)"
							lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
						>
							My Wing (2011)
						</Link>
					</Text>
				</Box>
				<Box
					grid-column="3"
					grid-row="3"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					color="#efefef"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
					>
						You Are There (2014)
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_8.png?v=2021-11-21T13:42:59.579Z"
					grid-column="2"
					grid-row="4"
					width="100%"
					height="max-content"
				/>
				<Box
					grid-column="2"
					grid-row="6"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiLink2} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						<Link
							href="https://www.youtube.com/watch?v=E_AYlWKqiic"
							target="_blank"
							link-color="#efefef"
							color="rgb(225,230,223)"
							text-decoration-line="initial"
							cursor="alias"
							visited-border-color="rgba(225, 230, 223, 0.5)"
							lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
						>
							Free Love (2021)
						</Link>
					</Text>
				</Box>
				<Box
					grid-column="3"
					grid-row="6"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiLink2} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						<Link
							href="https://www.youtube.com/watch?v=wuv8V2UkqJA"
							target="_blank"
							link-color="#efefef"
							color="rgb(225,230,223)"
							text-decoration-line="initial"
							cursor="alias"
							visited-border-color="rgba(225, 230, 223, 0.5)"
							lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
						>
							Too Good (2021)
						</Link>
					</Text>
				</Box>
				<Box
					grid-column="4"
					grid-row="6"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiMusic} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
					>
						Singles
					</Text>
				</Box>
				<Box
					grid-column="1"
					grid-row="6"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiLink2} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						<Link
							href="https://www.youtube.com/watch?v=j4Bk7F4_KVo"
							target="_blank"
							link-color="#efefef"
							color="rgb(225,230,223)"
							text-decoration-line="initial"
							cursor="alias"
							visited-border-color="rgba(225, 230, 223, 0.5)"
							lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
						>
							{" "}12월 24일

(2020)
						</Link>
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_10.png?v=2021-11-22T07:04:44.673Z"
					grid-column="1"
					grid-row="4"
					width="100%"
					height="max-content"
				/>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_4.png?v=2021-11-21T13:21:23.953Z"
					grid-column="3"
					grid-row="4"
					width="100%"
					height="max-content"
				/>
				<List
					font="200 14px &quot;Public Sans&quot;, sans-serif"
					list-style-type="circle"
					padding="0px 0px 0px 35px"
					grid-row="4"
					grid-column="4"
					overflow-y="scroll"
					overflow-x="hidden"
				>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Yellow Maple Leaves (2011)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Strong Children (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Do Not Be Afraid (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Amazing Grace (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						An Angel (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Childhood Companion (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Travel The Wind (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Ben (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						Can You Feel The Love Tonight (2012)
					</Text>
					<Text lg-font="200 12px &quot;Public Sans&quot;, sans-serif">
						龙月情缘 (The Dragon's Romance) (2014)
					</Text>
				</List>
				<Box
					grid-column="4"
					grid-row="3"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					lg-font="12px &quot;Public Sans&quot;, sans-serif"
				>
					<Icon category="fi" icon={FiLink2} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						<Link
							href="https://m.weibo.cn/status/4506601446768588"
							target="_blank"
							link-color="#ffffff"
							color="#efefef"
							text-decoration-line="initial"
							cursor="alias"
							visited-border-color="rgba(225, 230, 223, 0.5)"
							lg-font="200 12px &quot;Public Sans&quot;, sans-serif"
						>
							A New Beginning (2020)
						</Link>
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_6.png?v=2021-11-21T13:28:24.923Z"
					grid-column="2"
					grid-row="2"
					width="100%"
					height="max-content"
				/>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_5.png?v=2021-11-21T13:25:27.902Z"
					grid-column="3"
					grid-row="2"
					width="100%"
					height="max-content"
				/>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_9.png?v=2021-11-22T07:01:43.457Z"
					grid-column="4"
					grid-row="2"
					width="100%"
					height="max-content"
				/>
			</Box>
		</Box>
		<Box
			display="grid"
			grid-template-columns="repeat(6,1fr)"
			grid-template-rows="repeat(24,1fr)"
			min-height="100vh"
			height="100vh"
			margin="150px 0px 0px 0px"
		>
			<Box
				display="grid"
				quarkly-title="template"
				grid-column="2 / span 4"
				grid-row="2 / span 5"
				height="inherit"
				grid-template-rows="repeat(6,1fr)"
				grid-template-columns="repeat(4,1fr)"
			>
				<Text
					grid-row="1"
					grid-column="1 /span 2"
					font="64px --fontFamily-googlePlayfairDisplay"
					color="#c58d2d "
					align-self="end"
					lg-font="54px --fontFamily-googlePlayfairDisplay"
					md-font="32px --fontFamily-googlePlayfairDisplay"
					sm-font="24px --fontFamily-googlePlayfairDisplay"
				>
					Filmography
				</Text>
				<Text
					grid-row="1"
					grid-column="3/ span 2"
					font="200 12px --fontFamily-googlePublicSans"
					color="rgba(214, 214, 214, 0.7)"
					align-self="end"
					justify-self="end"
					sm-font="200 8px --fontFamily-googlePublicSans"
				>
					Appearances in film, television series, and various variety shows.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_11.png?v=2021-11-22T09:34:00.608Z"
					grid-column="1"
					grid-row="2"
					width="100%"
					height="max-content"
					display="inline-block"
					color="none"
				/>
				<Box
					grid-column="2"
					grid-row="5"
					display="grid"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 1fr"
					grid-template-rows="3fr"
					grid-gap="0px"
					justify-content="center"
					align-self="center"
					justify-self="stretch"
					margin="30px 0px 30px 0px"
					padding="20px 0px 20px 0px"
				>
					<Text
						grid-row="2"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="italic 200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Super Voice
					</Text>
					<Text
						grid-row="1"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						超级童声{"\t"}
					</Text>
					<Text
						grid-row="3"
						grid-column="1"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						2013{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Variety
						<br />
						{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="1"
					grid-row="5"
					display="grid"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 1fr"
					grid-template-rows="3fr"
					grid-gap="0px"
					align-self="center"
					justify-content="center"
					justify-self="stretch"
					margin="30px 0px 30px 0px"
					padding="20px 0px 20px 0px"
				>
					<Text
						grid-row="2"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="italic 200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						China's Got Talent
					</Text>
					<Text
						grid-row="1"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						中国达人秀{"\t"}
					</Text>
					<Text
						grid-row="3"
						grid-column="1"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						2010{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Variety
						<br />
						{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="4"
					grid-row="3"
					display="grid"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 1fr"
					grid-template-rows="3fr"
					grid-gap="0px"
					align-self="center"
					justify-content="center"
					justify-self="stretch"
					margin="30px 0px 30px 0px"
					padding="20px 0px 20px 0px"
				>
					<Text
						grid-row="2"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="italic 200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Bund Police{"\t"}
					</Text>
					<Text
						grid-row="1"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						外滩警事
						<br />
						{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="1"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						2013{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Series
						<br />
						{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="3"
					grid-row="3"
					display="grid"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 1fr"
					grid-template-rows="3fr"
					grid-gap="0px"
					align-self="center"
					justify-content="center"
					justify-self="stretch"
					margin="30px 0px 30px 0px"
					padding="20px 0px 20px 0px"
				>
					<Text
						grid-row="2"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="italic 200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						The Queen of SOP 2
					</Text>
					<Text
						grid-row="1"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						勝女的代價2
					</Text>
					<Text
						grid-row="3"
						grid-column="1"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						2013
					</Text>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Series
						<br />
						{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="2"
					grid-row="3"
					display="grid"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 1fr"
					grid-template-rows="3fr"
					grid-gap="0px"
					align-self="center"
					justify-content="center"
					justify-self="stretch"
					margin="30px 0px 30px 0px"
					padding="20px 0px 20px 0px"
				>
					<Text
						grid-row="2"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="italic 200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						A Candy for Mother
					</Text>
					<Text
						grid-row="1"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						掌心的糖果
						<br />
						{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="1"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						2014{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Film
						<br />
						{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="1"
					grid-row="3"
					display="grid"
					flex-direction="row"
					align-items="center"
					align-content="center"
					grid-template-columns="1fr 1fr"
					grid-template-rows="3fr"
					grid-gap="0px"
					justify-content="center"
					margin="30px 0px 30px 0px"
					justify-items="center"
					justify-self="stretch"
					align-self="center"
					padding="20px 0px 20px 0px"
				>
					<Text
						grid-row="2"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="italic 200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Soul Rhythm
						<br />
						{"\n\n\n\n"}
					</Text>
					<Text
						grid-row="1"
						grid-column="1 / span 2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100% "
						margin="5px 0px 5px 0px"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						靈魂的節奏
						<br />
						{"\n\n\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="1"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						2013{"\n\n"}
					</Text>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						text-align="center"
						width="100%"
						margin="5px 0px 5px 0px"
						color="rgba(225, 230, 223, 0.7)"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Film
						<br />
						{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="3 / span 2"
					grid-row="5"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					align-self="center"
					justify-self="stretch"
				>
					<Icon category="fi" icon={FiTv} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
						lg-font="200 12px --fontFamily-googlePublicSans"
					>
						Variety Show Performances
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_16.png?v=2021-11-22T09:58:11.436Z"
					grid-column="2"
					grid-row="4"
					width="100%"
					height="max-content"
				/>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_15.png?v=2021-11-22T09:46:00.573Z"
					grid-column="1"
					grid-row="4"
					width="100%"
					height="max-content"
				/>
				<List
					font="200 14px &quot;Public Sans&quot;, sans-serif"
					list-style-type="none"
					grid-row="4"
					grid-column="3 / span 2"
					overflow-y="scroll"
					padding="0px 0px 0px 0px"
					lg-font="200 12px --fontFamily-googlePublicSans"
				>
					<Text margin="8p 0px 16px 0px">
						2010 · Sunday My Biggest
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
					</Text>
					<Text margin="8p 0px 16px 0px">
						2011 · Happy Blue Sky{" "}
						<Em>
							We Have a Set
						</Em>
						{" "}Day Day Up
					</Text>
					<Text margin="8p 0px 16px 0px">
						2012 · Red Star{" "}
						<Em>
							Talented Children's Voice
						</Em>
						{" "}Innocence Hit the Earth{" "}
						<Em>
							Table Plan
						</Em>
						{" "}Sound One Team{"\t"}
						<Em>
							The Mysterious Baby Mid-Autumn Festival Concert with Rice
						</Em>
						{" "}Beware 00
					</Text>
					<Text margin="8p 0px 16px 0px">
						2013 · I Love My Motherland{" "}
						<Em>
							China New Voice Generation
						</Em>
					</Text>
					<Text margin="8p 0px 16px 0px">
						2014 · Wunderkindz by "Zeke & The Kiddos"
					</Text>
				</List>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_12.png?v=2021-11-22T09:34:15.618Z"
					grid-column="2"
					grid-row="2"
					width="100%"
					height="max-content"
				/>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_13.png?v=2021-11-22T09:34:26.033Z"
					grid-column="3"
					grid-row="2"
					width="100%"
					height="max-content"
				/>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_14.png?v=2021-11-22T09:34:37.902Z"
					grid-column="4"
					grid-row="2"
					width="100%"
					height="max-content"
				/>
			</Box>
		</Box>
		<Box
			display="grid"
			grid-template-columns="repeat(6,1fr)"
			grid-template-rows="repeat(24,1fr)"
			min-height="100vh"
			height="100vh"
		>
			<Box
				display="grid"
				quarkly-title="template"
				grid-column="2 / span 4"
				grid-row="2 / span 5"
				height="inherit"
				grid-template-rows="repeat(3,1fr)"
				grid-template-columns="repeat(4,1fr)"
			>
				<Text
					grid-row="1"
					grid-column="1 /span 2"
					font="64px --fontFamily-googlePlayfairDisplay"
					color="#c58d2d "
					align-self="end"
					lg-font="54px --fontFamily-googlePlayfairDisplay"
					md-font="32px --fontFamily-googlePlayfairDisplay"
					sm-font="24px --fontFamily-googlePlayfairDisplay"
				>
					Radio Shows
				</Text>
				<Text
					grid-row="1"
					grid-column="3/ span 2"
					font="200 12px --fontFamily-googlePublicSans"
					color="rgba(214, 214, 214, 0.7)"
					align-self="end"
					justify-self="end"
					sm-font="200 8px --fontFamily-googlePublicSans"
				>
					RADIO DJ
				</Text>
				<Image
					src="https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/WORK_17.png?v=2021-11-22T10:15:13.156Z"
					grid-column="1 / span 2"
					grid-row="2 / span 2"
					width="100%"
					height="max-content"
					display="inline-block"
					color="none"
				/>
				<Box
					grid-column="3 / span 2"
					grid-row="3"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					align-self="start"
					justify-self="stretch"
				>
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						October 2020 to September 2021{" "}
						<br />
						{"\n\n"}
					</Text>
				</Box>
				<Box
					grid-column="3 / span 2"
					grid-row="2"
					display="flex"
					flex-direction="row"
					align-items="center"
					justify-items="center"
					align-content="center"
					grid-template-columns="1fr 2fr"
					grid-template-rows="1fr"
					grid-gap="15px"
					justify-content="center"
					align-self="end"
					justify-self="stretch"
				>
					<Icon category="fi" icon={FiHeadphones} width="12px" height="12px" />
					<Text
						grid-row="3"
						grid-column="2"
						align-self="center"
						justify-self="center"
						font="200 14px &quot;Public Sans&quot;, sans-serif"
					>
						Akdong Seoul (악동서울/乐动首尔)
						<br />
						{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Box>
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