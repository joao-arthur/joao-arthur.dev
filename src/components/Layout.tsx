import type { JSX } from "react";

type ContentProps = {
    readonly children: JSX.Element | JSX.Element[];
};

export function Content({ children }: ContentProps): JSX.Element {
    return (
        <div className="w-full min-h-screen flex justify-center">
            <section className="grow flex flex-col gap-y-10 max-w-200 px-10 py-5 w-full">
                {children}
            </section>
        </div>
    );
}

export const Layout = {
    Content,
};
