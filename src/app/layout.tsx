import type { JSX } from "react";
import { Ubuntu } from "next/font/google";
import { cl } from "../lib/cl";
import { Header } from "../components/Header";
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
            <body className="w-full h-full overflow-hidden">
                <Header />
                <main className="w-full h-full overflow-auto px-5">
                    {children}
                </main>
            </body>
        </html>
    );
}
