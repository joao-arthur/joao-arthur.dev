import type { JSX } from "react";
import { cl } from "../../../lib/cl";

type Props = {
    readonly children: JSX.Element;
};

export default function BlogPost({ children }: Props): JSX.Element {
    return (
        <div
            className={cl(
                "prose",
                "flex flex-col m-auto pb-24 pt-5",
            )}
        >
            {children}
        </div>
    );
}
