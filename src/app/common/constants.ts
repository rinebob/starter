import { Course, EntitiesTableColumn, EntitiesViewState } from "./interfaces";

export const CoursesTableColumns: EntitiesTableColumn[] = [
    {
        name: 'id',
        label: 'ID',
        property: 'id',

    },
    {
        name: 'displayName',
        label: 'Name',
        property: 'displayName',

    },
    {
        name: 'description',
        label: 'Description',
        property: 'description',

    },
    {
        name: 'lessonsCount',
        label: 'Number of lessons',
        property: 'lessonsCount',

    },
    {
        name: 'categories',
        label: 'Categories',
        property: 'categories',

    },
    {
        name: 'seqNo',
        label: 'Sequence no.',
        property: 'seqNo',

    },
];

export const COURSE_INITIALIZER: Course = {
    id: '',
    displayName: '',
    description: '',
    longDescription: '',
    iconUrl: '',
    lessonsCount: 0,
    categories: [],
    seqNo: 0,
    url: '',
};

export const COURSES_VIEW_STORE_INITIALIZER: EntitiesViewState<Course> = {
    selectedEntity: COURSE_INITIALIZER,
    allEntities: [],
    tableData: [],
}