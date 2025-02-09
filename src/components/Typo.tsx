import type { JSX } from "react";
import { cl } from "../lib/cl";
import { Typography } from "@mui/material";

type TitleProps = {
    readonly label: string;
    readonly center?: boolean;
};

function Title({ label, center }: TitleProps): JSX.Element {
    return (
        <Typography variant="h4">
            {label}
        </Typography>
    );
}

type TextProps = {
    readonly label: string;
};

function Text({ label }: TextProps): JSX.Element {
    return (
        <Typography>{label}</Typography>
    );
}

type SubTitleProps = {
    readonly label: string;
};

function SubTitle({ label }: SubTitleProps): JSX.Element {
    return (
        <Typography variant="h6">
            {label}
        </Typography>
    );
}

export const Typo = {
    Title,
    Text,
    SubTitle,
};
