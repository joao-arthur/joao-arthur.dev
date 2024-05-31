import type { JSX } from "react";
import Link from "next/link";

type Props = {
    readonly title: string;
    readonly subTitle: string;
    readonly href: string;
};

export function Card({ title, subTitle, href }: Props): JSX.Element {
    return (
        <div className="flex flex-col w-full max-w-200 p-5 overflow-hidden">
            <Link href={href}>
                <div className="grow-1 shrink-1 max-w-200 min-w-0 h-40 mx-2 p-5 shadow-md bg-slate-100">
                    <h1 className="text-2xl text-gray-800">
                        {title}
                    </h1>
                    <span className="text-gray-600">
                        {subTitle}
                    </span>
                </div>
            </Link>
        </div>
    );
}
