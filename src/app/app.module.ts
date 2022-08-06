import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EntitiesViewModule } from './entities-view/entities-view.module';
import { EntitiesPanelModule } from './entities-panel/entities-panel.module';
import { EntitiesTableModule } from './entities-table/entities-table.module';
import { EntitiesCrudModule } from './entities-crud/entities-crud.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    EntitiesViewModule,
    EntitiesPanelModule,
    EntitiesTableModule,
    EntitiesCrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
