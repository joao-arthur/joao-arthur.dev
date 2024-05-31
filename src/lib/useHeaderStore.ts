type CurrentPage = "about" | "projects" | "blog";

type HeaderStore = {
    readonly page: CurrentPage;
    readonly setPage: (page: CurrentPage) => void;
}