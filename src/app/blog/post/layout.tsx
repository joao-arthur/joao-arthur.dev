import type { JSX } from "react";
import { cl } from "../../../lib/cl";

type Props = {
    readonly children: JSX.Element;
};

export default function BlogPost({ children }: Props): JSX.Element {
    return (
        <div className="w-full px-5">
            <div
                className={cl(
                    "prose",
                    "flex flex-col m-auto pb-12 pt-5 px-5",
                )}
            >
                {children}
            </div>
        </div>
    );
}
