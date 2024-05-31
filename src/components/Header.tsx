"use client";

import type { JSX } from "react";
import Link from "next/link";
import { cl } from "../lib/cl";
import { usePathname } from "next/navigation";

export function Header(): JSX.Element {
    const pathname = usePathname();

    return (
        <header className="mx-auto pt-3 pb-8">
            <nav className="flex justify-around">
                <Link
                    className={cl({ underline: pathname === "/" }, "px-4")}
                    href="/"
                >
                    about
                </Link>
                <Link
                    className={cl({ underline: pathname.startsWith("/project") }, "px-4")}
                    href="/project"
                >
                    projects
                </Link>
                <Link
                    className={cl({ underline: pathname.startsWith("/blog") }, "px-4")}
                    href="/blog"
                >
                    blog
                </Link>
            </nav>
        </header>
    );
}
