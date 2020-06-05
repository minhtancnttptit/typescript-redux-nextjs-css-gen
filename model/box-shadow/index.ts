import { Color } from '../index'

export interface CSS {
	shadowColor: Color,
	shiftRight: number,
	shiftDown: number,
	spread: number,
	blur: number,
	opacity: number,
	inset: boolean
}

export interface BoxShadowState {
	css: CSS[],
	selectedLayer: number,
	reverseTemplate: boolean,
	selectedTemplate: number,
	bgColor: Color,
} 