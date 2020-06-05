import { BoxShadowState } from './box-shadow';

export interface Action {
	type: string,
	payload?: any
}

export interface Color {
	hex: string,
	rgb: {
		r: number,
		g: number,
		b: number
	}
}

export interface State {
	boxShadow: BoxShadowState,
}


export * from './box-shadow';