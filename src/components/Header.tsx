"use client";

import type { JSX } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import { Button } from "./Button";

export function Header(): JSX.Element {
    const pathname = usePathname();
    const dark = "#075985";
    const light = "#0284c7";

    const [theme, setTheme] = useState(false);

    return (
        <div className="w-full bg-sky-800 h-24 mb-5">
            <div className="w-full h-20 bg-sky-700 flex justify-center items-center">
                <div className="flex items-center w-full px-5">
                    <div className="flex grow gap-x-5">
                        <Link href="/">
                            <Button>
                                <div className="w-24 h-12 flex justify-center items-center">
                                    <h2 className="text-white">About</h2>
                                </div>
                            </Button>
                        </Link>
                        <Link href="/project">
                            <Button>
                                <div className="w-24 h-12 flex justify-center items-center">
                                    <h2 className="text-white">Projects</h2>
                                </div>
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button>
                                <div className="w-24 h-12 flex justify-center items-center">
                                    <h2 className="text-white">Blog</h2>
                                </div>
                            </Button>
                        </Link>
                    </div>
                    <div className="flex">
                        <Button onClick={() => setTheme(!theme)}>
                            {theme
                                ? <FaRegMoon size={30} className="w-16 h-16 p-5" color="white" />
                                : <FaRegSun size={30} className="w-16 h-16 p-5" color="white" />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
