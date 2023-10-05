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

export interface IPropsHome {
    search: string;
}

export interface ColorModalProps {
    isOpen: boolean;
    onSelectColor: (color: string) => void;
    buttonPosition: { top: number; left: number };
    noteData: INotes;
    id: string;
}

export interface IPropsNavbar {
    setSearch: (searchTerm: string) => void;
}
