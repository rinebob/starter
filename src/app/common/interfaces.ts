
export interface EntityBase {
    id: string;
    displayName: string;
}
export interface Course extends EntityBase {
    description: string;
    longDescription: string;
    iconUrl: string;
    lessonsCount: number;
    categories: string[];
    seqNo: number;
    url: string;
}

export interface Lesson extends EntityBase {
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}

export interface EntitiesTableColumn {
    name: string;
    label: string;
    property: string;
}



