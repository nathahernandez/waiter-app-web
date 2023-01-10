import { createGlobalStyle } from 'styled-components'

import GeneralSansRegularTTF from '../assets/fonts/GeneralSans-Regular.ttf'
import GeneralSansRegularWOFF from '../assets/fonts/GeneralSans-Regular.woff'
import GeneralSansRegularWOFF2 from '../assets/fonts/GeneralSans-Regular.woff2'
import GeneralSansMediumTTF from '../assets/fonts/GeneralSans-Medium.ttf'
import GeneralSansMediumWOFF from '../assets/fonts/GeneralSans-Medium.woff'
import GeneralSansMediumWOFF2 from '../assets/fonts/GeneralSans-Medium.woff2'
import GeneralSansSemiBoldTTF from '../assets/fonts/GeneralSans-Semibold.ttf'
import GeneralSansSemiBoldWOFF from '../assets/fonts/GeneralSans-Semibold.woff'
import GeneralSansSemiBoldWOFF2 from '../assets/fonts/GeneralSans-Semibold.woff2'

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: "GeneralSans";
		font-weight: 400;
		font-display: "swap";
		font-style: "normal";
		src: url(${GeneralSansRegularWOFF2}) format("woff2"),
			 url(${GeneralSansRegularWOFF}) format("woff"),
			 url(${GeneralSansRegularTTF}) format("ttf");
	}
	@font-face {
		font-family: "GeneralSans";
		font-weight: 500;
		font-display: "swap";
		font-style: "normal";
		src: url(${GeneralSansMediumWOFF2}) format("woff2"),
			 url(${GeneralSansMediumWOFF}) format("woff"),
			 url(${GeneralSansMediumTTF}) format("ttf");
	}
	@font-face {
		font-family: "GeneralSans";
		font-weight: 600;
		font-display: "swap";
		font-style: "normal";
		src: url(${GeneralSansSemiBoldWOFF2}) format("woff2"),
			 url(${GeneralSansSemiBoldWOFF}) format("woff"),
			 url(${GeneralSansSemiBoldTTF}) format("ttf");
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: GeneralSans, sans-serif;
	}
	body {
		background: #FAFAFA;
		color: #333;
	}
	button {
		cursor: pointer;
		font-size: 1rem;
		color: #333
	}
`