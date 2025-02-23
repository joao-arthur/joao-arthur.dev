import enUS from "./en-US.json";
import ptBR from "./pt-BR.json";

export function m(locale: "pt-BR" | "en-US") {
    switch (locale) {
        case "pt-BR":
            return ptBR;
        case "en-US":
            return enUS;
    }
    return enUS;
}
