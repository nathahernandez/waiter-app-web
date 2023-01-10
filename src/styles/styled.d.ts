import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		TITLE: string,
		TYPOGRAPH: {
			HEADING: {
				LINE_HEIGHT: string,
				WEIGHT: number,
				DISPLAY: {
					SIZE: string
				},
				H1: {
					SIZE: string
				},
				H2: {
					SIZE: string
				},
				H3: {
					SIZE: string
				},
				H4: {
					SIZE: string
				},
				H5: {
					SIZE: string
				},
				H6: {
					SIZE: string
				}
			},
			BODY_TEXT: {
				LINE_HEIGHT: string,
				WEIGHT: number,
				LG: {
					SIZE: string
				},
				MD: {
					SIZE: string
				},
				SM: {
					SIZE: string
				}
			}
		},
		COLORS: {
			RED: {
				_100: string,
				_500: string,
				_800: string,
			},
			GRAY: {
				_100: string,
				_300: string,
				_600: string,
				_900: string
			},
			WHITE: {
				_100: string,
				_200: string
			}
		}
		BORDER: string
	}
}