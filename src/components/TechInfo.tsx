import type { JSX } from "react";

type Props = {
    readonly name: string;
    readonly level:
    | "HELLO_WORLD"
    | "BASICS"
    | "INTERMEDIATE"
    | "ADVANCED";
};

export function TechInfo({ name, level }: Props): JSX.Element {
    function description(): string {
        switch (level) {
            case "HELLO_WORLD":
                return "hello world";
            case "BASICS":
                return "basics";
            case "INTERMEDIATE":
                return "intermediate";
            case "ADVANCED":
                return "advanced";
        }
    }

    return (
        <>
            <span>
                {name}
            </span>
            <span>
                {description()}
            </span>
        </>
    );
}
