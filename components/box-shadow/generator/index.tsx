import { State, BoxShadowState, Color, Action } from "../../../model";
import { connect } from "react-redux";
import { Card, RangeSlider, Checkbox, FormLayout, Button } from "@shopify/polaris";
import {
	onChangeSlider,
	onChangeInset,
	onChangeShadowColor,
	onAddLayer,
	onClickLayer,
	onDeleteLayer,
	onSwapLayer,
} from '../../../redux/actions/box-shadow';
import { RangeSliderValue } from "@shopify/polaris/types/latest/src/components/RangeSlider/types";
import ColorPicker from "../../color-picker";
import ListLayer from "../../list-layer";
import { getArrayCssLayerBoxShadow } from "../../helper";

interface GeneratorProps extends BoxShadowState {
	onChangeSlider: (value: RangeSliderValue, id: string) => Action,
	onChangeInset: (newChecked: boolean, id: string) => Action,
	onChangeShadowColor: (color: Color) => Action,
	onAddLayer: () => Action,
	onClickLayer: (selectedLayer: number) => Action,
	onDeleteLayer: (id: number) => Action,
	onSwapLayer: (newList: { id: number, value: string }[]) => Action
}

const Generator: React.FC<GeneratorProps> = (props) => {
	const { css, selectedLayer } = props;
	const {
		shadowColor,
		shiftRight,
		shiftDown,
		spread,
		blur,
		opacity,
		inset
	} = css[selectedLayer];
	const {
		onChangeSlider,
		onChangeInset,
		onChangeShadowColor,
		onAddLayer,
		onClickLayer,
		onDeleteLayer,
		onSwapLayer,
	} = props;
	const arrayCss = getArrayCssLayerBoxShadow(css);

	return (
		<Card sectioned title="Box-Shadow CSS Generator">
			<Card.Section>
				<FormLayout>
					<RangeSlider
						id="shiftRight"
						label="Shift right"
						min={-50}
						max={50}
						step={1}
						value={shiftRight}
						output
						onChange={onChangeSlider}
					/>
					<RangeSlider
						id="shiftDown"
						label="Shift down"
						min={-50}
						max={50}
						step={1}
						value={shiftDown}
						output
						onChange={onChangeSlider}
					/>
					<RangeSlider
						id="spread"
						label="Spread"
						min={0}
						max={100}
						step={1}
						value={spread}
						output
						onChange={onChangeSlider}
					/>
					<RangeSlider
						id="blur"
						label="Blur"
						min={0}
						max={100}
						step={1}
						value={blur}
						output
						onChange={onChangeSlider}
					/>
					<RangeSlider
						id="opacity"
						label="Opacity"
						min={0}
						max={100}
						step={1}
						value={opacity}
						output
						onChange={onChangeSlider}
					/>
					<Checkbox
						label="Inset"
						checked={inset}
						onChange={onChangeInset}
					/>
					<ColorPicker color={shadowColor} onChangeColor={onChangeShadowColor} />
				</FormLayout>
			</Card.Section>
			<Card.Section>
				<Button onClick={onAddLayer}>
					Add layer
				</Button>
				<br />
				<br />
				<ListLayer
					arrayCss={arrayCss}
					selectedLayer={selectedLayer}
					onClickLayer={onClickLayer}
					onDeleteLayer={onDeleteLayer}
					onSwapLayer={onSwapLayer}
				/>
			</Card.Section>
		</Card>
	)
}

const mapStateToProps: (state: State) => BoxShadowState = (state) => {
	return state.boxShadow;
}

const mapDispatchToProps = {
	onChangeSlider,
	onChangeInset,
	onChangeShadowColor,
	onAddLayer,
	onClickLayer,
	onDeleteLayer,
	onSwapLayer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
