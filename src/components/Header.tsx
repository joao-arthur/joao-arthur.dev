import type { ReactElement } from "react";
import Link from "next/link";
import { cl } from "@/lib/cl";

type propsType = {
    readonly active: "about" | "blog" | "projects";
};

export function Header({ active }: propsType): ReactElement {
    return (
        <header className="w-1/3 mx-auto pt-3 pb-8">
            <nav className="flex justify-around">
                <Link
                    className={cl({ underline: active === "about" }, "px-4")}
                    href="/"
                >
                    about
                </Link>
                <Link
                    className={cl({ underline: active === "projects" }, "px-4")}
                    href="/projects"
                >
                    projects
                </Link>
                <Link
                    className={cl({ underline: active === "blog" }, "px-4")}
                    href="/blog"
                >
                    blog
                </Link>
            </nav>
        </header>
    );
}
