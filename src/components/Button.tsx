import type { JSX } from "react";
import { cl } from "../lib/cl";
import styles from "./Button.module.css";

type Props = {
    readonly children: JSX.Element;
    readonly onClick?: () => void;
};

export function Button({ children, onClick }: Props): JSX.Element {
    return (
        <button
            className={cl(
                "flex items-center justify-center",
                "rounded-3xl",
                "bg-rose-700",
                styles.button,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
