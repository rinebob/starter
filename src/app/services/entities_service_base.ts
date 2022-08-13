import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import 'firebase/firestore';
import * as afs from '@angular/fire/firestore';

import {EntityBase} from '../common/interfaces';
import { doc, setDoc, updateDoc } from '@angular/fire/firestore';

// @Injectable({
//     providedIn: 'root'
//   })
export abstract class EntitiesServiceBase<T extends EntityBase> {
    constructor(protected db: afs.Firestore){};

    async saveDocument<T>(collection: string, document: T) {
        const collectionRef = afs.collection(this.db, collection);
        const docRef = await afs.addDoc(collectionRef, document);

        console.log('eSB sD docRef: ', docRef);

        return docRef;
    }

    async saveDocumentWithId<T>(collection: string, document: T, id: string) {
        const collectionRef = afs.collection(this.db, collection);
        const newDocRef = afs.doc(collectionRef, id);
        await setDoc(newDocRef, document);
        console.log('eSB uD save with id. newDocRef: ', newDocRef);
    }

    async updateDocument<T>(collection: string, update: T, id: string) {
        const collectionRef = afs.collection(this.db, collection);
        const docRef = afs.doc(collectionRef, id);
        await updateDoc(docRef, update);

        console.log('eSB uD update: ', docRef);

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

        const documents: T[] = [];

        querySnapshot.forEach(doc => {
            console.log('eSB lD doc id/data: ', doc.id, doc.data());
            documents.push(doc.data() as T);
        })

        return documents;

    }

    async deleteDocument(collection: string, id: string) {
        const docRef = afs.doc(this.db, collection, id);
        const deleteRef = afs.deleteDoc(docRef);
        return deleteRef;
    }

}