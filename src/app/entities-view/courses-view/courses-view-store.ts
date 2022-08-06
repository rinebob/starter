import { Injectable } from '@angular/core';

import {Course, CoursesViewState, EntitiesViewStoreInterface} from '../../common/interfaces';
import { EntitiesViewStoreBase } from '../entities-view-store-base';
import {COURSES_VIEW_STORE_INITIALIZER} from '../../common/constants';

@Injectable()
export class CoursesViewStore extends EntitiesViewStoreBase<Course, CoursesViewState> 
 implements EntitiesViewStoreInterface<Course> {

    constructor() {
        super(COURSES_VIEW_STORE_INITIALIZER);
    }

}