import type { JSX } from "react";
import { cl } from "../lib/cl";
import styles from "./Card.module.css";

type Props = {
    readonly children: JSX.Element | readonly JSX.Element[];
};

export function Card({ children }: Props): JSX.Element {
    return (
        <div
            className={cl(
                "overflow-hidden",
                "p-5 flex items-center justify-center",
                "rounded-3xl",
                "bg-rose-100 rounded-2xl",
                "bg-rose-100 active:bg-rose-200",
                styles.card,
            )}
        >
            {children}
        </div>
    );
}
