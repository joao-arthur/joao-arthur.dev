import type { JSX } from "react";
import { cl } from "../lib/cl";

type ProgressProps = {
    readonly percentual: number;
};

function Progress({ percentual }: ProgressProps): JSX.Element {
    return (
        <div
            className="rounded-xl h-5 w-full bg-zinc-400"
            style={{ backgroundSize: "50px 50px" }}
        >
            <div
                className={cl("rounded-xl h-5", {
                    "bg-red-500": percentual <= 25,
                    "bg-orange-500": percentual > 25 && percentual <= 50,
                    "bg-yellow-500": percentual > 50 && percentual <= 75,
                    "bg-green-500": percentual > 75,
                })}
                style={{
                    width: `${percentual}%`,
                    backgroundSize: "50px 50px",
                }}
            />
        </div>
    );
}

type ContentProps = {
    readonly children: JSX.Element | JSX.Element[];
};

export function Content({ children }: ContentProps): JSX.Element {
    return (
        <div className="w-full min-h-screen flex justify-center">
            <section className="grow flex flex-col gap-y-10 max-w-200 px-10 py-5">
                {children}
            </section>
        </div>
    );
}

export const Layout = {
    Progress,
    Content,
};
