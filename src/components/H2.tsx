import type { JSX, ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export function H2({ children }: Props): JSX.Element {
    return <h2 className="text-xl">{children}</h2>;
}
