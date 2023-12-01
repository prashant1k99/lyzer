import Example from '@/pages/example'
import NavBar from './components/NavBar'

function App() {
	console.log('App')
	return (
		<div class="flex min-h-screen w-full flex-col">
			<NavBar />
			<Example />
		</div>
	)
}

export default App
