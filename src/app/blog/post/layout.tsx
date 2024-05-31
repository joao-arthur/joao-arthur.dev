import type { JSX } from "react";

type Props = {
    readonly children: JSX.Element;
};

export default function BlogPost({ children }: Props): JSX.Element {
    return (
        <>
            <div className="prose m-auto pb-24">
                {children}
            </div>
        </>
    );
}
