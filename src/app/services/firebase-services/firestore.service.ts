import {FirebaseApp} from "firebase/app";
import {initializeFirestore, doc, getDoc, onSnapshot, setDoc} from "firebase/firestore";

export class FirestoreService {
  private readonly firestore;

  constructor(firebaseApp: FirebaseApp) {
    this.firestore = initializeFirestore(firebaseApp, {});
  }

  public async fetchUserData(userEmail: string) {
    const result = await getDoc(doc(this.firestore, `users/${userEmail}`));
    if (!result.exists()) throw Error('User does not exist');
    return result.data();
  }

  public addSnapshotListener(path: string, callBack: any) {
    return onSnapshot(doc(
      this.firestore, path
    ), callBack);
  }

  public async createNewAccount(email: string) {
    await setDoc(doc(
      this.firestore, `users/${email}`
    ), {
      company_manager: false,
      orders: []
    })
  }
}
