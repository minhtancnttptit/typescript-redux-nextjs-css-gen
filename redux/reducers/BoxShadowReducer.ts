import { BOX_SHADOW as BS } from '../constaints/ActionTypes';
import { CSS, BoxShadowState, Action } from '../../model';
import cloneDeep from 'lodash/cloneDeep'

export default function boxShadowReducer(state: BoxShadowState = initialState, action: Action): BoxShadowState {
	console.log(action);

	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action);
	}
	return state;
}

const DEFAULT_CSS: CSS = {
	shadowColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0,
		}
	},
	shiftRight: 0,
	shiftDown: 0,
	spread: 0,
	blur: 0,
	opacity: 0,
	inset: false
}

const initialState: BoxShadowState = {
	css: [DEFAULT_CSS],
	selectedLayer: 0,
	reverseTemplate: false,
	selectedTemplate: -1,
	bgColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0
		}
	},
}

const handleChaneSlider: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const { selectedLayer } = state;
	const { name, value } = action.payload;
	const newState: BoxShadowState = cloneDeep(state);
	newState.css[selectedLayer][name] = value;
	return newState;
}

const handleChangeInset: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const { selectedLayer } = state;
	const { payload } = action;
	const newState = cloneDeep(state);
	newState.css[selectedLayer].inset = payload;
	return newState;
}

const handleChangeShadowColor: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const { selectedLayer } = state;
	const { payload } = action;
	const newState = cloneDeep(state);
	newState.css[selectedLayer].shadowColor = payload
	return newState;
}

const handleAddLayer: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const newState = cloneDeep(state);
	newState.css.push(DEFAULT_CSS);
	return newState;
}

const handleClickLayer: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const newState = cloneDeep(state);
	newState.selectedLayer = action.payload;
	return newState;
}

const handleDeleteLayer: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	if (state.css.length === 1) {
		return state;
	}
	const newState = cloneDeep(state);
	const { css, selectedLayer } = newState;
	const id = action.payload;
	if (id < selectedLayer || selectedLayer === css.length - 1) {
		newState.selectedLayer--;
	}
	newState.css.splice(id, 1);
	return newState;
}

const handleSwapLayer: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const newState = cloneDeep(state);
	const { css, selectedLayer } = newState;
	const newSelectedLayer = action.payload.findIndex(item => item.id === selectedLayer);
	let newCss = [];
	action.payload.forEach(item => {
		newCss.push(css[item.id]);
	})
	newState.selectedLayer = newSelectedLayer;
	newState.css = newCss;
	return newState;
}

const handleChangeBgColor: (state: BoxShadowState, action: Action) => BoxShadowState = (state, action) => {
	const newState = cloneDeep(state);
	newState.bgColor = action.payload;
	return newState;
}

const handlers = {
	[BS.ON_CHANGE_SLIDER]: handleChaneSlider,
	[BS.ON_CHANGE_INSET]: handleChangeInset,
	[BS.ON_CHANGE_SHADOW_COLOR]: handleChangeShadowColor,
	[BS.ON_ADD_LAYER]: handleAddLayer,
	[BS.ON_CLICK_lAYER]: handleClickLayer,
	[BS.ON_DELETE_LAYER]: handleDeleteLayer,
	[BS.ON_SWAP_LAYER]: handleSwapLayer,
	[BS.ON_CHANGE_BG_COLOR]: handleChangeBgColor,
}
