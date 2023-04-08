import type { ReactElement } from "react";
import { Progress } from "./Progress";

type propsType = {
    readonly name: string;
    readonly level:
        | "HELLO_WORLD"
        | "BASICS"
        | "INTERMEDIATE"
        | "ADVANCED";
};

export function TechInfo({ name, level }: propsType): ReactElement {
    function description():
        | "hello world"
        | "basics"
        | "intermediate"
        | "advanced" {
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

    function percentual(): 25 | 50 | 75 | 100 {
        switch (level) {
            case "HELLO_WORLD":
                return 25;
            case "BASICS":
                return 50;
            case "INTERMEDIATE":
                return 75;
            case "ADVANCED":
                return 100;
        }
    }

    return (
        <>
            <span style={{ flex: "1 1 0", minWidth: 80 }}>
                {name}
            </span>
            <span style={{ flex: "1 1 0", minWidth: 100 }}>
                {description()}
            </span>
            <div style={{ flex: "4 1 0", minWidth: 0 }}>
                <Progress percentual={percentual()} />
            </div>
        </>
    );
}
