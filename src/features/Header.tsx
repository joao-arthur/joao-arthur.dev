"use client";

import type { JSX } from "react";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaRegMoon, FaRegSun } from "react-icons/fa6";
import { Layout } from "../components/Layout";
import { cl } from "../lib/cl";
import { Button, useColorScheme } from "@mui/material";

export function Header(): JSX.Element {
    const pathname = usePathname();
    const colorScheme = useColorScheme();

    return (
        <div className="w-full flex flex-col">
            <div
                className={cl(
                    "w-full h-18",
                    "flex justify-center items-center",
                    "bg-prm-40 dark:bg-prm-15",
                )}
            >
                <div className="flex items-center w-full px-5">
                    <div className="flex grow gap-x-5">
                        <Button sx={{ width: "7rem" }} variant="contained">About</Button>
                        <Button sx={{ width: "7rem" }} variant="contained">Portfolio</Button>
                        <Button sx={{ width: "7rem" }} variant="contained">Blog</Button>
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
                                        color="white"
                                    />
                                </Layout.Button>
                            )
                            : null}
                        <Layout.Button
                            onClick={() => {
                                if (colorScheme?.mode === "dark") {
                                    colorScheme.setMode("light")
                                } else {
                                    colorScheme.setMode("dark")
                                }
                            }}
                        >
                            {colorScheme?.mode === "dark"
                                ? <FaRegMoon size={24} className="w-14 h-14 p-5" color="white" />
                                : <FaRegSun size={24} className="w-14 h-14 p-5" color="white" />}
                        </Layout.Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
