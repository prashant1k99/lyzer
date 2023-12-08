import NavBar from './components/NavBar'
import Main from './pages/Main'

function App() {
	return (
		<div class="flex min-h-screen w-full flex-col bg-gray-200 dark:bg-slate-800">
			<NavBar />
			<Main />
		</div>
	)
}

export default App
