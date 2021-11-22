import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"philosophy"} />
		<Helmet>
			<title>
				Zhong Chenle
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6195d547255a6d001e9c5f4a/images/Favicon.png?v=2021-11-21T13:45:50.370Z"} type={"image/x-icon"} />
		</Helmet>
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