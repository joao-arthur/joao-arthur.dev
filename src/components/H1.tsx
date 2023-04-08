import type { ReactElement, ReactNode } from "react";
import classNames from "classnames";

type propsType = {
    readonly children: ReactNode;
    readonly className?: string;
};

export function H1({ children, className }: propsType): ReactElement {
    return (
        <h1
            className={classNames("text-2xl pt-4 pb-2", className)}
        >
            {children}
        </h1>
    );
}
