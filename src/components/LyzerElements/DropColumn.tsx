import { AiOutlineDeleteColumn } from 'solid-icons/ai'
import { LyzerElement } from '.'

export const DropColumnLyzerElement: LyzerElement = {
	type: 'DropColumn',
	construct: (id: string) => {
		return {
			id,
			type: 'DropColumn',
			doesReturnData: false,
			props: {},
		}
	},
	lyzerBtnElement: {
		icon: AiOutlineDeleteColumn,
		label: 'Drop Column',
	},
	lyzerElement: () => {
		return (
			<div class="flex flex-col gap-y-2">
				<div class="text-xl font-bold">Drop Column</div>
				<div class="text-sm text-gray-500">Drop a column from the dataset</div>
			</div>
		)
	},
	lyzerElementFunction: (props: Record<string, unknown>) => {
		return
	},
}
