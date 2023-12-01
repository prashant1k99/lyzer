import {
	JSX,
	createContext,
	createSignal,
	useContext,
	createEffect,
} from 'solid-js'

type ThemeContextType = {
	theme: () => string
	toggleTheme: () => void
}

type Theme = 'light' | 'dark' | 'system'

export const ThemeContext = createContext<ThemeContextType>()

export function ThemeProvider(props: {
	children: JSX.Element
	defaultTheme: Theme
	storageKey: string
}) {
	const [theme, setTheme] = createSignal(
		localStorage.getItem(props.storageKey) || props.defaultTheme
	)

	createEffect(() => {
		const root = window.document.documentElement
		console.log('theme: ', theme())

		root.classList.remove('light', 'dark')

		if (theme() === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme())
	})

	const toggleTheme = () => {
		const newTheme = theme() === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		localStorage.setItem(props.storageKey, theme())
	}
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
