import type { JSX } from "react";

type Props = {
    readonly label: string;
};

export function SubTitle({ label }: Props): JSX.Element {
    return (
        <h2 className="text-rose-800">
            {label}
        </h2>
    );
}
