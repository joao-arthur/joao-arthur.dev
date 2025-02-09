import type { JSX } from "react";
import { cl } from "../lib/cl";

type TitleProps = {
    readonly label: string;
    readonly center?: boolean;
};

function Title({ label, center }: TitleProps): JSX.Element {
    return (
        <h1
            className={cl(
                { "text-center": center },
                "text-2xl font-bold text-zinc-700 dark:text-zinc-100",
            )}
        >
            {label}
        </h1>
    );
}

type TextProps = {
    readonly label: string;
};

function Text({ label }: TextProps): JSX.Element {
    return (
        <p className="text-zinc-700 dark:text-zinc-100">
            {label}
        </p>
    );
}

type SubTitleProps = {
    readonly label: string;
};

function SubTitle({ label }: SubTitleProps): JSX.Element {
    return (
        <h2 className="font-bold text-zinc-700 dark:text-zinc-100">
            {label}
        </h2>
    );
}

export const Typo = {
    Title,
    Text,
    SubTitle,
};
