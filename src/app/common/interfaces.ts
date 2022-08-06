import {Observable, Subscription} from 'rxjs';
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

