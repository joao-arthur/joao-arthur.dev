import type { JSX } from "react";
import { cl } from "../lib/cl";

type ContolledButtonProps = {
    readonly children: JSX.Element;
    readonly pressed: boolean;
};

function ControlledButton({ children, pressed }: ContolledButtonProps): JSX.Element {
    return (
        <button
            className={cl(
                "flex items-center justify-center",
                "rounded-3xl",
            )}
            disabled={pressed}
        >
            {children}
        </button>
    );
}

type ButtonProps = {
    readonly children: JSX.Element;
    readonly onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps): JSX.Element {
    return (
        <button
            className={cl(
                "flex items-center justify-center",
                "rounded-3xl",
                "bg-prm-700",
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

type CardProps = {
    readonly children: JSX.Element | readonly JSX.Element[];
};

function Card({ children }: CardProps): JSX.Element {
    return (
        <div
            className={cl(
                "overflow-hidden",
                "p-5 flex items-center justify-center",
                "rounded-2xl",
                "bg-prm-90",
                "dark:bg-prm-30",
            )}
        >
            {children}
        </div>
    );
}

type ProgressProps = {
    readonly percentual: number;
};

function Progress({ percentual }: ProgressProps): JSX.Element {
    return (
        <div
            className={cl("rounded-xl h-5 w-full")}
            style={{
                backgroundSize: "50px 50px",
                background: "linear-gradient(#808080, #ababab)",
            }}
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
                    backgroundImage:
                        "linear-gradient(45deg, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent 100%)",
                    backgroundSize: "50px 50px",
                }}
            />
        </div>
    );
}

type ContainerProps = {
    readonly children: JSX.Element | JSX.Element[];
};

export function Container({ children }: ContainerProps): JSX.Element {
    return (
        <section
            className={cl(
                "w-full",
                "flex flex-col items-center",
                "bg-white dark:bg-black",
            )}
        >
            {children}
        </section>
    );
}

type ContentProps = {
    readonly children: JSX.Element | JSX.Element[];
};

export function Content({ children }: ContentProps): JSX.Element {
    return (
        <div className="w-full min-h-screen flex justify-center">
            <section
                className={cl("grow flex flex-col gap-y-10 max-w-200 px-10 py-5")}
            >
                {children}
            </section>
        </div>
    );
}

export const Layout = {
    ControlledButton,
    Button,
    Card,
    Progress,
    Container,
    Content,
};
