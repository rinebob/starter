import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Course, CoursesViewState, EntitiesViewStoreInterface, Lesson} from '../../common/interfaces';
import { EntitiesViewStoreBase } from '../entities-view-store-base';
import {COURSES_VIEW_STORE_INITIALIZER} from '../../common/constants';

@Injectable()
export class CoursesViewStoreBase extends EntitiesViewStoreBase<Course, CoursesViewState> 
 implements EntitiesViewStoreInterface<Course> {

    readonly allLessons$: Observable<Lesson[]> = this.select(state => state.allLessons);

    readonly setAllLessons = this.updater((state, allLessons: Lesson[]) => ({
        ...state,
        allLessons,
    }));

    constructor() {
        super(COURSES_VIEW_STORE_INITIALIZER);
    }

}