export type BlogPost = {
    readonly id: string;
    readonly name: {
        readonly en: string;
        readonly pt: string;
    };
    readonly date: string;
};

export type PortfolioPost = {
    readonly id: string;
    readonly name: string;
    readonly date: string;
};

export type IdPageProps = {
    readonly params: Promise<{
        readonly id: string;
    }>;
};
