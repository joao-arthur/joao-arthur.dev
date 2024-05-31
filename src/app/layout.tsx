import type { JSX } from "react";
import localFont from "next/font/local";
import { cl } from "../lib/cl";
import "../styles/globals.css";

const myFont = localFont({ src: "./fonts/AgaveNerdFont-Regular.ttf" });

type Props = {
    readonly children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
    return (
        <html lang="en" className={cl(myFont.className, "w-svw h-svh")}>
            <body className="w-full h-full">{children}</body>
        </html>
    );
}
