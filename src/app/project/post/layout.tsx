import type { JSX } from "react";

type Props = {
    readonly children: JSX.Element;
};

export default function ProjectPost({ children }: Props): JSX.Element {
    return (
        <>
            <div className="prose prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated m-auto pb-24">
                {children}
            </div>
        </>
    );
}
