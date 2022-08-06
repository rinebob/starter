import { EntitiesTableColumn } from "./interfaces";

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