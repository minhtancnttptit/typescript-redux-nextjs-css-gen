import { Card } from "@shopify/polaris";
import { connect } from "react-redux";
import { ResizableBox } from "react-resizable";
import { onChangeBgColor } from '../../../redux/actions/box-shadow';
import ColorPicker from "../../color-picker";
import styles from './preview.module.css';
import { getArrayCssLayerBoxShadow } from '../../helper';
import { BoxShadowState, Action, Color, State } from '../../../model'

interface PreviewProps extends BoxShadowState {
	onChangeBgColor: (color: Color) => Action
}

const Preview: React.FC<PreviewProps> = (props) => {
	const { css, bgColor, onChangeBgColor } = props

	const previewBoxStyle = {
		backgroundColor: bgColor.hex,
		boxShadow: getArrayCssLayerBoxShadow(css).join(', ')
	}

	return (
		<Card title="Preview">
			<Card.Section>
				<div className="row">
					<div className="column">
						<ResizableBox className="box" width={200} height={200} axis="both">
							<span className={styles.previewBox + " text"} style={previewBoxStyle} />
						</ResizableBox>
					</div>
					<div className="column">
						<ColorPicker color={bgColor} onChangeColor={onChangeBgColor} />
					</div>
				</div>
			</Card.Section>
		</Card>
	)
}

const mapStateToProps: (state: State) => BoxShadowState = (state) => {
	return state.boxShadow
}

export default connect(mapStateToProps, { onChangeBgColor })(Preview)