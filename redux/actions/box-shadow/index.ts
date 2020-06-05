import { BOX_SHADOW as _ } from '../../constaints/ActionTypes';
import { Action, Color } from '../../../model';

export const onChangeSlider: (value: number, name: string) => Action = (value, name) => {
	return {
		type: _.ON_CHANGE_SLIDER,
		payload: { name: name, value: value }
	}
}

export const onChangeInset: (checked: boolean) => Action = (checked) => {
	return {
		type: _.ON_CHANGE_INSET,
		payload: checked
	}
}

export const onChangeShadowColor: (color: Color) => Action = (color) => {
	return {
		type: _.ON_CHANGE_SHADOW_COLOR,
		payload: color
	}
}

export const onAddLayer: () => Action = () => {
	return {
		type: _.ON_ADD_LAYER
	}
}

export const onClickLayer: (selectedLayer: number) => Action = (selectedLayer) => {
	return {
		type: _.ON_CLICK_lAYER,
		payload: selectedLayer
	}
}

export const onDeleteLayer: (id: number) => Action = (id) => {
	return {
		type: _.ON_DELETE_LAYER,
		payload: id
	}
}

export const onSwapLayer: (newList: { id: number, value: string }[]) => Action = (newList) => {
	return {
		type: _.ON_SWAP_LAYER,
		payload: newList
	}
}

export const onChangeBgColor: (color: Color) => Action = (color) => {
	return {
		type: _.ON_CHANGE_BG_COLOR,
		payload: color
	}
}