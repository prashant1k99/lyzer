import DataView from '@/components/DataView'

export default function Main() {
	return (
		<div class="mx-auto w-full max-w-[2500px] grow grid xl:grid-cols-[400px_2fr_3fr] lg:grid-cols-[300px_3fr_4fr] grid-rows-1">
			<div class="bg-gray-300">Drag Element Sidebar</div>
			<div class="bg-gray-500">Drop Zone</div>
			<div class="bg-gray-700">
				<DataView />
			</div>
		</div>
	)
}
