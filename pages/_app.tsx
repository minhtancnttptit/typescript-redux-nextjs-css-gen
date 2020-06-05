import { AppProps } from 'next/app';
import { AppProvider } from '@shopify/polaris';
import eTranslations from '@shopify/polaris/locales/en.json';
import NavBar from '../components/nav-bar';
import { wrapper } from '../redux';

import '@shopify/polaris/styles.css';
import 'react-resizable/css/styles.css';

export function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider i18n={eTranslations}>
			<NavBar />
			<Component {...pageProps} />
		</AppProvider>
	)
}

export default wrapper.withRedux(App);
