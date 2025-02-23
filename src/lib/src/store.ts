import type { Writable } from "svelte/store";
import type { Theme } from "./types";
import { writable } from "svelte/store";

export const appTheme: Writable<Theme> = writable("dark");
