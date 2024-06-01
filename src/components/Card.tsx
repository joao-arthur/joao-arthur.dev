import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly children: JSX.Element | readonly JSX.Element[];
};

export function Card({ children }: Props): JSX.Element {
    const dark = "#0369a1";
    const light = "#0ea5e9";

    return (
        <div
            className={cl(
                "overflow-hidden",
                "p-6",
                "rounded-3xl",
                "border-sky-600 active:border-sky-700",
                "bg-sky-100 active:bg-sky-200",
            )}
            style={{
                background: `linear-gradient(135deg, ${light}, ${dark})`,
            }}
        >
            {children}
        </div>
    );
}
