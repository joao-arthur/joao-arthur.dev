"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaRegMoon, FaRegSun } from "react-icons/fa6";
import { Layout } from "../components/Layout";
import { HeaderItem } from "./HeaderItem";
import { cl } from "../lib/cl";

export function Header(): JSX.Element {
    const pathname = usePathname();
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        setTheme(window.document.body.classList.contains("dark"));
    }, []);

    return (
        <div className="w-full flex flex-col">
            <div
                className={cl(
                    "w-full",
                    "flex justify-center items-center",
                    "bg-(--color-prm-40) dark:bg-(--color-prm-15)",
                )}
            >
                <div className="flex items-center w-full px-5">
                    <div className="flex grow gap-x-5">
                        <HeaderItem
                            active={pathname === "/"}
                            href="/"
                            title="About"
                        />
                        <HeaderItem
                            active={pathname.startsWith("/portfolio")}
                            href="/portfolio"
                            title="Portfolio"
                        />
                        <HeaderItem
                            active={pathname.startsWith("/blog")}
                            href="/blog"
                            title="Blog"
                        />
                    </div>
                    <div className="flex flex-row gap-x-5">
                        {pathname.includes("/post/")
                            ? (
                                <Layout.Button
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                >
                                    <FaArrowLeft
                                        size={24}
                                        className="w-14 h-14 p-5"
                                        color="#d5e3ff"
                                    />
                                </Layout.Button>
                            )
                            : null}
                        <Layout.Button
                            onClick={() => {
                                if (window.document.body.classList.contains("dark")) {
                                    window.document.body.classList.remove("dark");
                                    setTheme(false);
                                } else {
                                    window.document.body.classList.add("dark");
                                    setTheme(true);
                                }
                            }}
                        >
                            {theme
                                ? <FaRegMoon size={24} className="w-14 h-14 p-5" color="#d5e3ff" />
                                : <FaRegSun size={24} className="w-14 h-14 p-5" color="#d5e3ff" />}
                        </Layout.Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
