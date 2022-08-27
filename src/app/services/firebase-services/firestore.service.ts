import {FirebaseApp} from "firebase/app";
import {initializeFirestore, doc, getDoc, onSnapshot, getDocs, collection, query} from "firebase/firestore";
import {ICardData} from "../../customer/products/common/card.interface,ts";

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

  public async getAllProducts(): Promise<ICardData[]> {
    const companies_docs = await getDocs(query(collection(this.firestore, 'companies')));
    const data: ICardData[] = []
    companies_docs.forEach((document) => {
      const doc_data = document.data();
      const doc_products = doc_data["products"];
      for (const product of doc_products) {
        data.push(product)
      }
    });
    return data;
  }
}
