import type { JSX } from "react";
import { cl } from "../lib/cl";
import styles from "./ControlledButton.module.css";

type Props = {
    readonly children: JSX.Element;
    readonly pressed: boolean;
};

export function ControlledButton({ children, pressed }: Props): JSX.Element {
    return (
        <button
            className={cl(
                "flex items-center justify-center",
                "rounded-3xl",
                "bg-rose-700",
                pressed ? styles.pressed : styles.unpressed,
            )}
            disabled={pressed}
        >
            {children}
        </button>
    );
}
