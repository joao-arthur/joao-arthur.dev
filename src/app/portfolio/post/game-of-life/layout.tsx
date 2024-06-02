import type { JSX } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conway's Game Of Life | João Arthur",
};

type Props = {
    readonly children: JSX.Element;
};

export default function BlogPost20230812({ children }: Props): JSX.Element {
    return children;
}
