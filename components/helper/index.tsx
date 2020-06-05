import { CSS } from "../../model";

const getCssLayer: (layer: CSS) => string = (layer) => {
	const { shadowColor, shiftRight, shiftDown, spread, blur, opacity, inset } = layer
	const { r, g, b } = shadowColor.rgb
	let result = `rgba(${r}, ${g}, ${b}, ${opacity / 100}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
	if (inset === true)
		result += ' inset';
	return result;
}

export const getArrayCssLayerBoxShadow: (css: CSS[]) => string[] = (css) => {
	const result = [];
	css.forEach(item => {
		result.push(getCssLayer(item));
	})
	return result;
}

export const getCssCodeBoxShadow: (css: CSS[]) => JSX.Element = (css) => {
	const result = getArrayCssLayerBoxShadow(css);
	return (
		<div>{`box-shadow: ${result.join(', ')};`}</div>
	);
}