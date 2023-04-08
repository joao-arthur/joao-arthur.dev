import type { ReactElement, ReactNode } from "react";

type propsType = {
    readonly children: ReactNode;
};

export function H2({ children }: propsType): ReactElement {
    return <h2 className="text-xl pt-5 py-2">{children}</h2>;
}
