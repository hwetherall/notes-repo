export interface Note {
    id: string;
    title: string;
    content: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export interface FileUpload {
    id: string;
    name: string;
    type: string;
    size: number;
    url: string;
}