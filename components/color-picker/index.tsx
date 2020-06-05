import { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Color, Action } from '../../model';

interface ColorPickerProps {
	color: Color,
	onChangeColor: (color: Color) => Action
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
	const [hidden, setHidden] = useState(true);

	const { color, onChangeColor } = props;

	const onClickButton = () => {
		setHidden(!hidden);
	}

	return (
		<>
			<style jsx>
				{
					`
					.btn {
						background-color: ${color.hex};
						width: 50px;
						height: 25px;
						margin: 1rem;
					}
					`
				}
			</style>
			<button className="btn" onClick={onClickButton} />
			{!hidden && <SketchPicker color={color.hex} onChange={(color) => onChangeColor(color)} />}
		</>
	)
}

export default ColorPicker;
