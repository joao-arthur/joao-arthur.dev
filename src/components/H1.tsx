import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly children: JSX.Element | string;
    readonly className?: string;
};

export function H1({ children, className }: Props): JSX.Element {
    return (
        <h1 className={cl("text-2xl pt-4 pb-2", className)}>
            {children}
        </h1>
    );
}
