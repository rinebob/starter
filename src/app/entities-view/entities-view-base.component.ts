import {Observable, Subject} from 'rxjs';

import {EntitiesViewStoreInterface, EntityBase} from '../common/interfaces';

export abstract class EntitiesViewBase<T extends EntityBase>  {
  readonly destroy = new Subject<void>();

  selectedEntity$: Observable<T> = this.entitiesViewStore.selectedEntity$;
  allEntities$: Observable<T[]> = this.entitiesViewStore.allEntities$;
  tableData$: Observable<T[]> = this.entitiesViewStore.tableData$;

  constructor(private readonly entitiesViewStore: EntitiesViewStoreInterface<T>) { }

  setSelectedEntity(entity: T) {
    this.entitiesViewStore.setSelectedEntity(entity);
  }

  setAllEntities(entities: T[]) {
    this.entitiesViewStore.setAllEntities(entities);
  }

  setTableData(entities: T[]) {
    this.entitiesViewStore.setTableData(entities);
  }


  getEntity(collection: string, id: string) {
    
  }

  listEntities(collection: string) {

  }

  createEntity(collection: string, entity: T) {

  }

}
