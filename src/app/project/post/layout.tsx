import type { JSX } from "react";
import { cl } from "../../../lib/cl";

type Props = {
    readonly children: JSX.Element;
};

export default function ProjectPost({ children }: Props): JSX.Element {
    return (
        <div
            className={cl(
                "prose prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated",
                "flex flex-col pb-24 pt-5",
            )}
        >
            {children}
        </div>
    );
}
