import type { IconTypes } from 'solid-icons'
import type { JSX } from 'solid-js/jsx-runtime'
import { DropColumnLyzerElement } from './DropColumn'

export type ElementsType = 'DropColumn'

export type Data = 'string' | 'number' | 'boolean' | 'object' | 'array'

export type LyzerElementInstance = {
	id: string
	type: ElementsType
	doesReturnData: boolean
	props: Record<string, unknown>
}

export type LyzerElement = {
	type: ElementsType
	construct: (id: string) => LyzerElementInstance

	lyzerBtnElement: {
		icon: IconTypes
		label: string
	}

	lyzerElement: () => JSX.Element

	lyzerElementFunction: (props: Record<string, unknown>) => Data | void
}

type LyzerElmentsType = {
	[key in ElementsType]: LyzerElement
}

export const LyzerElements: LyzerElmentsType = {
	DropColumn: DropColumnLyzerElement,
}
