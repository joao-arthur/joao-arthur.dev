import type { ReactElement, ReactNode } from "react";

type propsType = {
    readonly children: ReactNode;
};

export function Main({ children }: propsType): ReactElement {
    return <main className="h-full overflow-auto">{children}</main>;
}
