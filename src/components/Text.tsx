import type { JSX } from "react";

type Props = {
    readonly label: string;
};

export function Text({ label }: Props): JSX.Element {
    return <p className="text-rose-700">{label}</p>;
}
