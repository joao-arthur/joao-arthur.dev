"use client";

import type { JSX } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaRegMoon, FaRegSun } from "react-icons/fa6";
import { Button } from "../components/Button";
import { HeaderItem } from "./HeaderItem";

export function Header(): JSX.Element {
    const pathname = usePathname();
    const [theme, setTheme] = useState(false);

    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-20 bg-rose-700 flex justify-center items-center">
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
                                <Button
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                >
                                    <FaArrowLeft
                                        size={24}
                                        className="w-14 h-14 p-5"
                                        color="#fecdd3"
                                    />
                                </Button>
                            )
                            : null}
                        <Button onClick={() => setTheme(!theme)}>
                            {theme
                                ? <FaRegMoon size={24} className="w-14 h-14 p-5" color="#fecdd3" />
                                : <FaRegSun size={24} className="w-14 h-14 p-5" color="#fecdd3" />}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full h-3 bg-rose-800" />
        </div>
    );
}
