export interface TCategory {
    _id?: string;
    name: string;
    description: string;
    images: string;
    isAvailable?: boolean; // true
    isDeleted?: boolean;
}