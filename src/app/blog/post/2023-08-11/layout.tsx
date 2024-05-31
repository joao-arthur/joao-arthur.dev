import type { JSX } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "2023-08-11 | João Arthur",
};

type Props = {
    readonly children: JSX.Element;
};

export default function BlogPost20230811({ children }: Props): JSX.Element {
    return children;
}
