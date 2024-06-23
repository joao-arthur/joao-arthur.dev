export type Post = {
    readonly id: string;
    readonly name: string;
    readonly date: string;
};

export type IdPageProps = {
    readonly params: {
        readonly id: string;
    };
};
