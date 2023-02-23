import { AppProps } from 'next/app';
import '../styles/index.scss';
import '../styles/App.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }