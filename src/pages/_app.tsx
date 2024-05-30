import type { JSX } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import localFont from 'next/font/local';

const myFont = localFont({
    src: '../styles/0xProtoNerdFont-Regular.ttf',
    display: 'swap',
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}
