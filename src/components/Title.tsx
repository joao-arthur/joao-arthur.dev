import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly label: string;
    readonly center?: boolean;
};

export function Title({ label, center }: Props): JSX.Element {
    return (
        <h1 className={cl("text-2xl text-rose-800 font-bold", center ? "text-center" : "")}>
            {label}
        </h1>
    );
}
