"use client";

import type { JSX } from "react";
import Link from "next/link";
import { Layout } from "../components/Layout";

type Props = {
    readonly active: boolean;
    readonly href: string;
    readonly title: string;
};

export function HeaderItem({ active, href, title }: Props): JSX.Element {
    if (active) {
        return (
            <Layout.ControlledButton key={`header-${title.toLocaleLowerCase()}`} pressed>
                <div>
                    <div className="w-24 h-12 flex justify-center items-center">
                        <h2 className="text-(--color-prm-95)">{title}</h2>
                    </div>
                    <div className="bg-(--color-prm-25) dark:bg-(--color-prm-30) h-2 rounded-md"/>
                </div>
            </Layout.ControlledButton>
        );
    } else {
        return (
            <Link href={href}>
                <Layout.ControlledButton
                    key={`header-${title.toLocaleLowerCase()}`}
                    pressed={false}
                >
                    <div className="w-24 h-12 flex justify-center items-center">
                        <h2 className="text-(--color-prm-95)">{title}</h2>
                    </div>
                </Layout.ControlledButton>
            </Link>
        );
    }
}
