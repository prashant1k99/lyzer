import { render } from 'solid-js/web'
import App from '@/App'
// import ThemeProvider from '@/lib/hooks/Theme'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/index.css'
import 'solid-devtools'

const root = document.getElementById('root')

render(
	() => (
		<ThemeProvider storageKey="lyzer-ui-theme" defaultTheme="system">
			<App />
		</ThemeProvider>
	),
	root!
)
