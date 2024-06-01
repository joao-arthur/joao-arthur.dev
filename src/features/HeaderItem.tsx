"use client";

import type { JSX } from "react";
import Link from "next/link";
import { ControlledButton } from "../components/ControlledButton";

type Props = {
    readonly active: boolean;
    readonly href: string;
    readonly title: string;
};

export function HeaderItem({ active, href, title }: Props): JSX.Element {
    if (active) {
        return (
            <ControlledButton key={`header-${title.toLocaleLowerCase()}`} pressed>
                <div className="w-24 h-12 flex justify-center items-center">
                    <h2 className="text-rose-200">{title}</h2>
                </div>
            </ControlledButton>
        );
    } else {
        return (
            <Link href={href}>
                <ControlledButton key={`header-${title.toLocaleLowerCase()}`} pressed={false}>
                    <div className="w-24 h-12 flex justify-center items-center">
                        <h2 className="text-rose-200">{title}</h2>
                    </div>
                </ControlledButton>
            </Link>
        );
    }
}
