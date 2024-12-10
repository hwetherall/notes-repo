import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
};

export const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

export const getFileType = (filename: string): string => {
    const extension = filename.split('.').pop()?.toLowerCase();
    switch (extension) {
        case 'pdf':
            return 'PDF Document';
        case 'doc':
        case 'docx':
            return 'Word Document';
        case 'txt':
            return 'Text File';
        default:
            return 'Unknown';
    }
};