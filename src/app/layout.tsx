import type { JSX } from "react";
import Head from "next/head";
import { Ubuntu } from "next/font/google";
import { cl } from "../lib/cl";
import { Main } from "../components/Main";
import "../styles/globals.css";
import { Header } from "../components/Header";

const myFont = Ubuntu({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});

type Props = {
    readonly children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
    return (
        <html lang="en" className={cl(myFont.className, "w-svw h-svh")}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="w-full h-full">
                <Header active="about" />
                <Main>{children}</Main>
            </body>
        </html>
    );
}
