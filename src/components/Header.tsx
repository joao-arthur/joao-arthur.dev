"use client";

import type { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

import { cl } from "../lib/cl";
import { Button } from "./Button";
import { SubTitle } from "./SubTitle";

export function Header(): JSX.Element {
    const pathname = usePathname();
    const dark = "#075985";
    const light = "#0284c7";

    return (
        <header className="w-full bg-sky-700 h-24">
            <div className="w-full h-20 bg-sky-500">
                <div className="flex justify-around">
                    <div className="flex">
                        <div
                            className={cl(
                                "w-20 h-12",
                                "flex items-center justify-center",
                                "rounded-3xl",
                            )}
                            style={{
                                boxShadow: "0px 2px 6px 0px #1f1f1f",
                                background: `linear-gradient(135deg, ${light}, ${dark})`,
                            }}
                        >
                            <SubTitle label="About" />
                        </div>
                        <div
                            className={cl(
                                "w-20 h-12",
                                "flex items-center justify-center",
                                "rounded-3xl",
                            )}
                            style={{
                                boxShadow: "0px 2px 6px 0px #1f1f1f",
                                background: `linear-gradient(135deg, ${light}, ${dark})`,
                            }}
                        >
                            <SubTitle label="Projects" />
                        </div>
                        <div
                            className={cl(
                                "w-20 h-12",
                                "flex items-center justify-center",
                                "rounded-3xl",
                            )}
                            style={{
                                boxShadow: "0px 2px 6px 0px #1f1f1f",
                                background: `linear-gradient(135deg, ${light}, ${dark})`,
                            }}
                        >
                            <SubTitle label="Blog" />
                        </div>
                        <Button>
                    <FaRegSun size={30} color="white" />
                </Button>
                <Button>
                    <FaRegMoon size={30} color="white" />
                </Button>
                    </div>
                </div>
                
            </div>
        </header>
    );
}
