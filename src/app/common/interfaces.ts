import {Observable, Subscription} from 'rxjs';
export interface EntityBase {
    [key: string]: AllEntityTypes;
    id: string;
    displayName: string;
}

export type AllEntityTypes = EntityBaseTypes | Course[keyof Course];
export type EntityBaseKeys = keyof EntityBase;
export type EntityBaseTypes = EntityBase[keyof EntityBase];

export interface AuCourse {
    id: string;
    description: string;
    longDescription: string;
    iconUrl: string;
    lessonsCount: number;
    categories: string[];
    seqNo: number;
    url: string;
}

// StarterApp course converted from AuCourse interface
export interface Course extends EntityBase {
    [key: string]: CourseTypes;
    description: string;
    iconUrl: string;
    lessonsCount: number;
    // causes the sort function to mismatch type
    // categories: string[];
    seqNo: number;
    url: string;
}

export type CourseKeys = keyof Course;
export type CourseTypes = Course[keyof Course];

export interface Lesson extends EntityBase {
    [key: string]: LessonTypes;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}

export type LessonKeys = keyof Lesson;
export type LessonTypes = Lesson[keyof Lesson];

export interface EntitiesTableColumn {
    name: string;
    label: string;
    property: string;
}

export interface EntitiesViewState<T extends EntityBase> {
    selectedEntity: T;
    allEntities: T[];
    tableData: T[];
}

export interface CoursesViewState extends EntitiesViewState<Course> {
}

export interface EntitiesViewStoreInterface<T extends EntityBase> {
    selectedEntity$: Observable<T>;
    setSelectedEntity: (observableOrValue: T|Observable<T>) => Subscription;
    allEntities$: Observable<T[]>;
    setAllEntities: (observableOrValue: T[]|Observable<T[]>) => Subscription;
    tableData$: Observable<T[]>;
    setTableData: (observableOrValue: T[]|Observable<T[]>) => Subscription;
}

