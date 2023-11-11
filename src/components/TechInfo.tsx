import type { ReactElement } from "react";

type propsType = {
    readonly name: string;
    readonly level:
        | "HELLO_WORLD"
        | "BASICS"
        | "INTERMEDIATE"
        | "ADVANCED";
};

export function TechInfo({ name, level }: propsType): ReactElement {
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
