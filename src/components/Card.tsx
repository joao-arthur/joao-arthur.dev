import type { JSX } from "react";
import Link from "next/link";
import { cl } from "../lib/cl";

type Props = {
    readonly title: string;
    readonly subTitle: string;
    readonly href: string;
};

export function Card({ title, subTitle, href }: Props): JSX.Element {
    return (
        <div className="flex flex-col w-full max-w-200 p-5 overflow-hidden">
            <Link href={href}>
                <div className={
                    cl(
                        "grow-1 shrink-1 max-w-200 min-w-0 h-40",
                        "mx-2 p-6",
                        "shadow-md",
                        "bg-amber-50 rounded-2xl",
                        )}>
                    <h1 className="text-2xl text-amber-900 font-bold">
                        {title}
                    </h1>
                    <span className="text-amber-800">
                        {subTitle}
                    </span>
                </div>
            </Link>
        </div>
    );
}
