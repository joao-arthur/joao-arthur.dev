import type { ReactElement, ReactNode } from "react";

type props = {
    readonly children: ReactNode;
};

export function Topic({ children }: props): ReactElement {
    return (
        <span className="px-3 py-1 mx-1 inline-block">
            {children}
        </span>
    );
}
