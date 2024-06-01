import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly children: JSX.Element;
};

export function Button({ children }: Props): JSX.Element {
    const dark = "#075985";
    const light = "#0284c7";

    return (
        <div
            className={cl(
                "w-16 h-16",
                "flex items-center justify-center",
                "rounded-3xl",
            )}
            style={{
                boxShadow: "0px 2px 6px 0px #1f1f1f",
                background: `linear-gradient(135deg, ${light}, ${dark})`,
            }}
        >
                {children}
        </div>
    );
}
