import { BoxShadowState } from "../../model"
import { getCssCodeBoxShadow } from '../helper';
import { Card } from "@shopify/polaris";

interface CssCodeProps {
	cssCode: JSX.Element
}

const CssCode: React.FC<CssCodeProps> = ({ cssCode }) => {
	return (
		<Card title="CSS code">
			<Card.Section>
				{cssCode}
			</Card.Section>
		</Card>
	)
}

export default CssCode;
