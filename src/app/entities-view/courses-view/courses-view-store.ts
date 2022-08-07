import { Injectable } from '@angular/core';
import { CoursesViewStoreBase } from './courses-view-store-base';

@Injectable()
export class CoursesViewStore extends CoursesViewStoreBase  {
    constructor() {
        super();
    }
}