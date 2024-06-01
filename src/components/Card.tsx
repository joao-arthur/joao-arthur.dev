import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly children: JSX.Element | readonly JSX.Element[];
};

export function Card({ children }: Props): JSX.Element {
    return (
        <div
            className={cl(
                "overflow-hidden",
                "p-6",
                "rounded-3xl",
                "shadow-md border-emerald-600 active:border-emerald-700",
                "bg-emerald-100 active:bg-emerald-200",
            )}
        >
            {children}
        </div>
    );
}
