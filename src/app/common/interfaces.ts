

export interface Course {
    id: number;
    description: string;
    longDescription: string;
    iconUrl: string;
    lessonsCount: number;
    categories: string[];
    seqNo: number;
    url: string;
}

export interface Lesson {
    id: number;
    description: string;
    'duration': string;
    'seqNo': number;
    courseId: number;
}