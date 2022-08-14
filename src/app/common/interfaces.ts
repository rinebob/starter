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

// StarterApp Course object converted from AuCourse object interface
export interface Course extends EntityBase {
    [key: string]: CourseTypes;
    description: string;
    iconUrl: string;
    lessonsCount: number;
    lessons?: Lesson[];
    categories?: string[];
    seqNo: number;
    url: string;
}

export type CourseKeys = keyof Course;
export type CourseTypes = Course[keyof Course];

export interface AuLesson {
    id: number,
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}

// StarterApp Lesson object converted from AuLesson object interface
export interface Lesson extends EntityBase {
    [key: string]: LessonTypes;
    duration: string;
    seqNo: number;
    courseId: string |number;
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
    allLessons: Lesson[];
}

export interface EntitiesViewStoreInterface<T extends EntityBase> {
    selectedEntity$: Observable<T>;
    setSelectedEntity: (observableOrValue: T|Observable<T>) => Subscription;
    allEntities$: Observable<T[]>;
    setAllEntities: (observableOrValue: T[]|Observable<T[]>) => Subscription;
    tableData$: Observable<T[]>;
    setTableData: (observableOrValue: T[]|Observable<T[]>) => Subscription;
}

export interface CoursesViewStoreInterface extends EntitiesViewStoreInterface<Course> {
    allLessons$: Observable<Lesson[]>;
    setAllLessons: (observableOrValue: Lesson[]|Observable<Lesson[]>) => Subscription;
}
