import type { JSX } from "react";
import { Ubuntu } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { cl } from "../lib/cl";
import { Header } from "../features/Header";
import { theme } from "../features/theme";
import "../styles/globals.css";
import { CssBaseline } from "@mui/material";

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
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <section className="w-full flex flex-col items-center">
                            <Header />
                            {children}
                        </section>
                    </ThemeProvider>
                </main>
            </body>
        </html>
    );
}
