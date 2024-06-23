import type { JSX } from "react";
import { cl } from "../../../lib/cl";

type Props = {
    readonly children: JSX.Element;
};

export default function ProjectPost({ children }: Props): JSX.Element {
    return (
        <div className="w-full px-5">
            <div
                className={cl(
                    "prose dark:prose-invert prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated",
                    "flex flex-col pb-12 pt-5 m-auto",
                )}
            >
                {children}
            </div>
        </div>
    );
}
