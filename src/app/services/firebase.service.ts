import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {FirebaseApp, initializeApp} from 'firebase/app';
import {AuthenticationService} from "./firebase-services/authentication.service";
import {FirestoreService} from "./firebase-services/firestore.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly firebaseApp: FirebaseApp;
  public readonly authentication: AuthenticationService;
  public readonly firestore: FirestoreService;
  constructor() {
    this.firebaseApp = initializeApp(environment.firebaseConfig);
    this.authentication = new AuthenticationService(this.firebaseApp);
    this.firestore = new FirestoreService(this.firebaseApp);
  }
}
