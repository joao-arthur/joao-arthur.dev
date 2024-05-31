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
                <div className="flex">
                    <div className="px-10">
                        <Link
                            className={cl({ underline: pathname === "/" })}
                            href="/"
                        >
                            about
                        </Link>
                    </div>
                    <div className="px-10">
                        <Link
                            className={cl({ underline: pathname.startsWith("/project") })}
                            href="/project"
                        >
                            projects
                        </Link>
                    </div>
                    <div className="px-10">
                        <Link
                            className={cl({ underline: pathname.startsWith("/blog") })}
                            href="/blog"
                        >
                            blog
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
