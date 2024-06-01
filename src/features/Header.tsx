"use client";

import type { JSX } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import { Button } from "../components/Button";
import { HeaderItem } from "./HeaderItem";

export function Header(): JSX.Element {
    const pathname = usePathname();
    const [theme, setTheme] = useState(false);

    return (
        <div className="w-full bg-rose-800 h-28">
            <div className="w-full h-20 bg-rose-700 flex justify-center items-center">
                <div className="flex items-center w-full px-5">
                    <div className="flex grow gap-x-5">
                        <HeaderItem
                            active={pathname === "/"}
                            href="/"
                            title="About"
                        />
                        <HeaderItem
                            active={pathname.startsWith("/project")}
                            href="/project"
                            title="Projects"
                        />
                        <HeaderItem
                            active={pathname.startsWith("/blog")}
                            href="/blog"
                            title="Blog"
                        />
                    </div>
                    <div className="flex">
                        <Button onClick={() => setTheme(!theme)}>
                            {theme
                                ? <FaRegMoon size={30} className="w-16 h-16 p-5" color="#fecdd3" />
                                : <FaRegSun size={30} className="w-16 h-16 p-5" color="#fecdd3" />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
