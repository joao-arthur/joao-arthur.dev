import type { JSX } from "react";

type Props = {
    readonly label: string;
};

export function Title({ label }: Props): JSX.Element {
    return (
        <h1 className="text-2xl text-rose-800 font-bold">
            {label}
        </h1>
    );
}
