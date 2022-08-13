import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityBase } from '../common/interfaces';
import { EntitiesServiceBase } from '../services/entities_service_base';

@Component({
  template: ``,
})
export abstract class EntitiesCrudBase<T extends EntityBase> implements OnInit {
  @Output() readonly loadEntities = new EventEmitter<void>();

  @Input()
  set allEntities(entities: T[]) {
    this.allEntitiesBS.next(entities);
  }
  get allEntities() {
    return this.allEntitiesBS.value;
  }
  allEntitiesBS = new BehaviorSubject<T[]>([]);

  loadButtonText = '';

  constructor(@Inject(EntitiesServiceBase) 
    protected entitiesService: EntitiesServiceBase<T> ) { }

  ngOnInit(): void {
    console.log('eC ngOI input courses: ', this.allEntitiesBS.value);
  }

  loadAll() {
    this.loadEntities.emit();
  }

  saveDocument(collection: string, document: T) {
    this.entitiesService.saveDocument(collection, document);
  }

  saveDocumentWithId(collection: string, document: T, id: string) {
    this.entitiesService.saveDocumentWithId(collection, document, id);

  }

  updateDocument(collection: string, update: T, id: string) {
    this.entitiesService.updateDocument(collection, update, id);
  }

  getDocument(collection: string, id: string) {
    this.entitiesService.getDocument(collection, id);
  }

  listDocuments(collection: string) {
    this.entitiesService.listDocuments(collection);
  }

  deleteDocument(collection: string, id: string) {
    this.entitiesService.deleteDocument(collection, id);

  }

}
