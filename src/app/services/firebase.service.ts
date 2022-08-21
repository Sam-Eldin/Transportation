import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {FirebaseApp, initializeApp} from 'firebase/app';
import {initializeFirestore, Firestore} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly firebaseApp: FirebaseApp;
  public readonly firestore: Firestore;
  constructor() {
    this.firebaseApp = initializeApp(environment.firebaseConfig);
    this.firestore = initializeFirestore(this.firebaseApp, {});
  }
}
