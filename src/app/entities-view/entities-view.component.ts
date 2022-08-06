import {EntityBase} from '../common/interfaces';
export abstract class EntitiesView<T extends EntityBase>  {

  constructor() { }

  getEntity(collection: string, id: string) {
    
  }

  listEntities(collection: string) {

  }

  createEntity(collection: string, entity: T) {

  }

}
