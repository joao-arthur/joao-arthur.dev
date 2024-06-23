import type { JSX } from "react";
import { Ubuntu } from "next/font/google";
import { cl } from "../lib/cl";
import { Header } from "../features/Header";
import { Footer } from "../features/Footer";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

const myFont = Ubuntu({
    style: "normal",
    subsets: ["latin"],
    weight: "400",
});

type Props = {
    readonly children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
    return (
        <html lang="en" className={cl(myFont.className, "w-svw h-svh overflow-hidden")}>
            <body className="flex flex-col w-full h-full overflow-hidden">
                <main className="w-full h-full overflow-y-auto overflow-x-hidden min-w-0">
                    <Layout.Container>
                        <Header />
                        {children}
                        <Footer />
                    </Layout.Container>
                </main>
            </body>
        </html>
    );
}
