import type { JSX } from "react";

type Props = {
    readonly children: JSX.Element;
};

export function H2({ children }: Props): JSX.Element {
    return <h2 className="text-xl">{children}</h2>;
}
