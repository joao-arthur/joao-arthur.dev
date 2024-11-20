export type Post = {
    readonly id: string;
    readonly name: {
        readonly en: string;
        readonly pt: string;
    };
    readonly date: string;
};

export type IdPageProps = {
    readonly params: {
        readonly id: string;
    };
};
