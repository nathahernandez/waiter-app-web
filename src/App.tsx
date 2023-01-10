import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Workflow from './components/Workflow'
import { GlobalStyles } from './styles/GlobalStyles'
import { LIGHT } from './styles/themes/light'

export default function App () {
	return (
		<ThemeProvider theme={LIGHT}>
			<Header />
			<Workflow />
			<GlobalStyles />
		</ThemeProvider>
	)
}1