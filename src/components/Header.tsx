import type { JSX } from "react";
import Link from "next/link";
import { cl } from "../lib/cl";
import { useHeaderStore } from "../lib/useHeaderStore";

export function Header(): JSX.Element {
    const { page } = useHeaderStore();

    return (
        <header className="w-1/3 mx-auto pt-3 pb-8">
            <nav className="flex justify-around">
                <Link
                    className={cl({ underline: page === "about" }, "px-4")}
                    href="/"
                >
                    about
                </Link>
                <Link
                    className={cl({ underline: page === "project" }, "px-4")}
                    href="/project"
                >
                    projects
                </Link>
                <Link
                    className={cl({ underline: page === "blog" }, "px-4")}
                    href="/blog"
                >
                    blog
                </Link>
            </nav>
        </header>
    );
}
