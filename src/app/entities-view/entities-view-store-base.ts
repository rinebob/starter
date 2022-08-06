import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter, tap, map, withLatestFrom, pairwise, skip } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import {EntityBase, EntitiesViewState, EntitiesViewStoreInterface} from '../common/interfaces';

export class EntitiesViewStoreBase<T extends EntityBase, S extends EntitiesViewState<T>> 
extends ComponentStore<S> implements EntitiesViewStoreInterface<T> {

    readonly selectedEntity$: Observable<T> = this.select(state => state.selectedEntity);
    readonly allEntities$: Observable<T[]> = this.select(state => state.allEntities);
    readonly tableData$: Observable<T[]> = this.select(state => state.tableData);

    constructor(defaultState: S) {
        super(defaultState);
    }

    readonly setSelectedEntity = this.updater((state, selectedEntity: T) => ({
        ...state,
        selectedEntity,
    }));

    readonly setAllEntities = this.updater((state, allEntities: T[]) => ({
        ...state,
        allEntities,
    }));

    readonly setTableData = this.updater((state, tableData: T[]) => ({
        ...state,
        tableData,
    }));
}