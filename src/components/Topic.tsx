import type { JSX, ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export function Topic({ children }: Props): JSX.Element {
    return (
        <span className="px-3 py-1 mx-1 inline-block">
            {children}
        </span>
    );
}
