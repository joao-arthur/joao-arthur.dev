import type { JSX, ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export function Main({ children }: Props): JSX.Element {
    return <main className="h-full overflow-auto px-5">{children}</main>;
}
