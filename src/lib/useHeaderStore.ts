export type CurrentPage = "about" | "project" | "blog";

type HeaderStore = {
    readonly page: CurrentPage;
    readonly setPage: (page: CurrentPage) => void;
};

export function useHeaderStore(): HeaderStore {
    return {
        page: "about",
        setPage: () => {},
    };
}
