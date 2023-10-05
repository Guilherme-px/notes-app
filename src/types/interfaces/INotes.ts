export interface INotes {
    title: string;
    color: string;
    is_favorite?: boolean;
}

export interface INotesList {
    id: string;
    title: string;
    color: string;
    is_favorite: boolean;
    created_at: Date;
    updated_at: Date;
}
