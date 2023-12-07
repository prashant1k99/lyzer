import canvasDatagrid from 'canvas-datagrid'
import { createEffect, createSignal } from 'solid-js'

import tempData from '@/assets/temp.json'

export default function DataView() {
	const [data, _] = createSignal(tempData)
	// const [sheet, setSheet] = createSignal<HTMLElement | null>(null)

	const gridElement = document.getElementById('grid')
	createEffect(() => {
		console.log(tempData)
		const grid = canvasDatagrid({
			parentNode: gridElement,
			data: tempData,
			editable: false,
			showFilter: false,
			allowSorting: false,
			showRowHeaders: false,
		}) as HTMLElement
		console.log(grid)
		// grid.style = {
		// 	...grid.style,
		// 	width: '100%',
		// 	height: '100%',
		// 	// cellWidth: 100, // giving the initial size of the cell width - Use this to set the initial size of the cell width
		// 	cellBackgroundColor: '#000',
		// 	cellColor: '#fff',
		// 	cellBorderColor: '#2F3B4E',
		// 	columnHeaderCellBackgroundColor: '#000',
		// 	columnHeaderCellColor: '#fff',
		// 	columnHeaderCellBorderColor: '#2F3B4E',
		// 	columnHeaderCellHoverBackgroundColor: '#34517d',
		// 	columnHeaderCellHoverColor: '#fff',
		// 	columnHeaderCellActiveBackgroundColor: '#34517d',
		// 	rowHeaderCellBackgroundColor: '#000',
		// 	rowHeaderCellColor: '#fff',
		// 	rowHeaderCellBorderColor: '#2F3B4E',
		// 	activeCellBackgroundColor: '#34517d',
		// 	activeCellSelectedBackgroundColor: '#34517d',
		// 	activeCellSelectedColor: '#fff',
		// 	cellSelectedBackgroundColor: '#34517d',
		// 	cellSelectedColor: '#fff',
		// 	activeCellColor: '#fff',
		// 	activeRowHeaderCellColor: '#fff',
		// 	activeRowHeaderCellBackgroundColor: '#34517d',
		// 	activeColumnHeaderCellBackgroundColor: '#34517d',
		// 	activeColumnHeaderCellColor: '#fff',
		// 	cellHoverBackgroundColor: '#34517d',
		// 	cellHoverColor: '#fff',
		// 	cornerCellBackgroundColor: '#000',
		// 	cornerCellBorderColor: '#2F3B4E',
		// 	// activeCellSelectedBackgroundColor: '#000'
		// }
		// console.log(grid.style.width)
	})

	return <div id="canvas" />
}
