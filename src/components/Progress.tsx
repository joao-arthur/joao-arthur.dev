import type { JSX } from "react";
import { cl } from "../lib/cl";

type Props = {
    readonly percentual: 25 | 50 | 75 | 100;
};

export function Progress({ percentual }: Props): JSX.Element {
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
