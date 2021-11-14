export type ListDocumentRaw = {
    name: string;
    description?: string;
    owner?: string;
    date: string;
}

export type ListDocument = {
    id: string;
    name: string;
    description?: string;
    owner?: string;
    timeStamp: number;
    dateFormatted: string;
}
