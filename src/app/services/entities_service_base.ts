import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import 'firebase/firestore';
import * as afs from '@angular/fire/firestore';

import {EntityBase} from '../common/interfaces';
import { setDoc, updateDoc } from '@angular/fire/firestore';

// @Injectable({
//     providedIn: 'root'
//   })
export abstract class EntitiesServiceBase<T extends EntityBase> {
    constructor(protected db: afs.Firestore){};

    async saveDocument(collection: string, document: T) {
        const collectionRef = afs.collection(this.db, collection);
        const docRef = await afs.addDoc(collectionRef, document)

        return docRef;
    }

    async saveDocumentWithId(collection: string, document: T, id: string) {
        const collectionRef = afs.collection(this.db, collection);
        const newDocRef = afs.doc(collectionRef, id);
        await setDoc(newDocRef, document);
    }

    async updateDocument(collection: string, update: T, id: string) {
        const collectionRef = afs.collection(this.db, collection);
        const docRef = afs.doc(collectionRef, id);
        await updateDoc(docRef, update)

    }

    async getDocument(collection: string, id: string) {
        const docRef = afs.doc(this.db, collection, id);
        const docSnap = await afs.getDoc(docRef);

        if (docSnap.exists()) {
            console.log('eSB gD docSnap/data: ', docSnap, docSnap.data());

            return docSnap;
        }

        return;
    }

    async listDocuments(collection: string) {
        const collectionRef = afs.collection(this.db, collection);
        const querySnapshot = await afs.getDocs(collectionRef);

        const documents = [];

        querySnapshot.forEach(doc => {
            console.log('eSB lD doc id/data: ', doc.id, doc.data());
            documents.push(doc.data());
        })

    }

    async deleteDocument() {

    }

}