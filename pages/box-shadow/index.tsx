import { connect } from 'react-redux'
import { Page, Layout } from '@shopify/polaris'
import Generator from '../../components/box-shadow/generator'
import Preview from '../../components/box-shadow/preview'
import CssCode from '../../components/css-code'
import { BoxShadowState } from '../../model'
import { getCssCodeBoxShadow } from '../../components/helper'

const BoxShadow: React.FC<BoxShadowState> = (props) => {
	const { css } = props;
	const cssCode = getCssCodeBoxShadow(css);

	return (
		<Layout>
			<Layout.Section oneHalf>
				<Generator />
			</Layout.Section>
			<Layout.Section oneHalf>
				<Preview />
				<CssCode cssCode={cssCode} />
			</Layout.Section>
		</Layout>
	)
}

const mapStateToProps = (state) => {
	return state.boxShadow
}


export default connect(mapStateToProps)(BoxShadow)