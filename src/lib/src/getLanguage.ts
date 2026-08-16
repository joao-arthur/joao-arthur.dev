import type { Language } from "./types";

export function get_language(pathname: string): Language {
    if (pathname.startsWith("/en-US")) {
        return "en-US";
    }
    if (pathname.startsWith("/pt-BR")) {
        return "pt-BR";
    }
    return "en-US";
}
