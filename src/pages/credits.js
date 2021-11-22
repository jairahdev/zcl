import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { FiLink2 } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"credits"} />
		<Helmet>
			<title>
				Zhong Chenle
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/Favicon.png?v=2021-11-21T13:45:50.370Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Nav margin="0px 0px 0px 0px" />
		<Box
			height="100vh"
			min-height="100vh"
			width="100%"
			min-width="100vh"
			padding="10% 30% 0px 30%"
		>
			<Text font="32px &quot;Public Sans&quot;, sans-serif" color="#c58d2d ">
				Acknowledgements
			</Text>
			<Text font="200 16px &quot;Public Sans&quot;, sans-serif">
				Big thanks to these resources for helping me build this project!
			</Text>
			<Text font="200 16px &quot;Public Sans&quot;, sans-serif">
				Information
			</Text>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://smtown-nctzens.fandom.com/wiki/Chenle"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					smtown-nctzens on fandom.com
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://kids.kiddle.co/Zhong_Chenle"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					kids kiddle encyclopedia
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://www.baike.com/wikiid/7763502410330754573?view_id=4kjzdfkwn6y000"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					baike wiki
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://namu.wiki/w/%EC%B2%9C%EB%9F%AC"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					namu wiki
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://baike.baidu.com/item/%E9%92%9F%E8%BE%B0%E4%B9%90"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					baidu
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://chenleradio.carrd.co"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					chenleradio on carrd
				</Link>
			</Box>
			<Text font="200 16px &quot;Public Sans&quot;, sans-serif">
				Photos
			</Text>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://nctinfo.tumblr.com/"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					fy!nct on tumblr
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://smtown-nctzens.fandom.com/wiki/Chenle"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					smtown-nctzens on fandom.com
				</Link>
			</Box>
			<Box display="flex">
				<Icon
					category="fi"
					icon={FiLink2}
					width="12px"
					height="12px"
					margin="auto 10px auto 0px"
				/>
				<Link
					href="https://nctinfo.tumblr.com/"
					border-color="#ffffff"
					color="rgba(214, 214, 214)"
					hover-color="#c58d2d "
					hover-text-decoration-line="underline"
					hover-transition="all 0.3s ease-in-out 0s"
					text-decoration-line="initial"
					font="100 16px &quot;Public Sans&quot;, sans-serif"
				>
					fy!nct on tumblr
				</Link>
			</Box>
			<Text font="200 16px &quot;Public Sans&quot;, sans-serif">
				and my good friend Alex who helped me stay sane throughout this entire thing!
			</Text>
		</Box>
		<Components.Foot />
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