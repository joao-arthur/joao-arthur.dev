import type { JSX } from "react";

type Props = {
    readonly children: JSX.Element;
};

export function Main({ children }: Props): JSX.Element {
    return <main className="h-full overflow-auto px-5">{children}</main>;
}
