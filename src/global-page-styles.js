import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "#151515",
        "font": "16px --fontFamily-googlePublicSans",
        "color": "#e1e6df",
        "overflow-x": "hidden"
    },
    "index": {
        "background": "#151515",
        "font": "16px --fontFamily-googlePublicSans",
        "color": "#e1e6df",
        "overflow-x": "hidden"
    },
    "profile": {
        "background": "#151515",
        "font": "16px --fontFamily-googlePublicSans",
        "color": "#e1e6df",
        "overflow-x": "hidden"
    },
    "philosophy": {
        "background": "#151515",
        "font": "16px --fontFamily-googlePublicSans",
        "color": "#e1e6df",
        "overflow-x": "hidden"
    },
    "projects": {
        "background": "#151515",
        "font": "16px --fontFamily-googlePublicSans",
        "color": "#e1e6df",
        "overflow-x": "hidden"
    },
    "credits": {
        "background": "#151515",
        "font": "16px --fontFamily-googlePublicSans",
        "color": "#e1e6df",
        "overflow-x": "hidden"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
