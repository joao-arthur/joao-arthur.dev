import type { ReactElement } from "react";

export default function BlogPost({ children }: any): ReactElement {
    return (
        <>
            <div className="prose m-auto pb-10">
                {children}
            </div>
        </>
    );
}
