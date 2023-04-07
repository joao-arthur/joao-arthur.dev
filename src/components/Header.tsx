import type { ReactElement } from "react";
import classNames from "classnames";
import Link from "next/link";

type props = {
    readonly active: "about" | "blog" | "projects";
};

export function Header({ active }: props): ReactElement {
    return (
        <header className="w-1/3 mx-auto pt-3 pb-8">
            <nav className="flex justify-around">
                <Link
                    className={classNames(
                        {
                            underline: active === "about",
                        },
                        "px-4",
                    )}
                    href="/"
                >
                    about
                </Link>
                <Link
                    className={classNames(
                        {
                            underline: active === "projects",
                        },
                        "px-4",
                    )}
                    href="/projects"
                >
                    projects
                </Link>
                <Link
                    className={classNames(
                        {
                            underline: active === "blog",
                        },
                        "px-4",
                    )}
                    href="/blog"
                >
                    blog
                </Link>
            </nav>
        </header>
    );
}
