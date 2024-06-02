import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly children: JSX.Element | JSX.Element[];
};

export function LayoutContainer({ children }: Props): JSX.Element {
    return (
        <section
            className={cl(
                "w-full h-full",
                "flex flex-col items-center gap-y-5",
            )}
        >
            {children}
        </section>
    );
}
