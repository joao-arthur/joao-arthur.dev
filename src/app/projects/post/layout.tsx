import type { ReactElement } from "react";

export default function ProjectsPost({ children }: any): ReactElement {
    return (
        <>
            <div className="prose prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated m-auto pb-10">
                {children}
            </div>
        </>
    );
}

