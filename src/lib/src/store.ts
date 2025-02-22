import type { Writable } from "svelte/store";
import type { Language, Theme } from "./types";
import { writable } from "svelte/store";

export const appTheme: Writable<Theme> = writable("dark");
export const appLanguage: Writable<Language> = writable("en-US");
