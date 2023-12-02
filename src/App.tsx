import Example from '@/pages/example'
import NavBar from './components/NavBar'

function App() {
	return (
		<div class="flex min-h-screen w-full flex-col bg-gray-200 dark:bg-slate-800">
			<NavBar />
			<Example />
		</div>
	)
}

export default App
