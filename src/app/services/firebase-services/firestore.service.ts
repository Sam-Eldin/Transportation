import {FirebaseApp, initializeApp} from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  addDoc,
  arrayUnion,
  updateDoc,
  query,
  collection,
  getDocs,
  where,
  limit
} from "firebase/firestore";
import {ICardData} from "../../customer/products/common/card.interface,ts";
import {IOrder} from "../../customer/products/common/order.interface";
import firebase from "firebase/compat/app";

import {environment} from "../../../environments/environment";
import {LimitData} from "@syncfusion/ej2-angular-inputs";

const app = initializeApp(environment.firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export class FirestoreService {
  private readonly firestore;

// Initialize Cloud Firestore and get a reference to the service
  constructor(firebaseApp: FirebaseApp) {
    this.firestore = getFirestore(firebaseApp);
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

  public async getProductsFromSupplier(cat: string[] = [], _limit: number = 10) {
    const productsRef = collection(this.firestore, 'products')
    let products_doc = await getDocs(query(productsRef, limit(_limit)));
    if (cat && cat.length >= 1)
      products_doc = await getDocs(query(productsRef, where("Category", "in", cat), limit(_limit)));

    const data: ICardData[] = []
    products_doc.forEach((document) => {
      data.push(<ICardData>document.data())
    });
    return data;
  }

  public async getAllProducts(): Promise<ICardData[]> {
    const companies_docs = await getDocs(query(collection(this.firestore, 'companies')));
    const data: ICardData[] = []
    companies_docs.forEach((document) => {
      const doc_data = document.data();
      const doc_products = doc_data["products"];
      // await setDoc(query(collection(this.firestore, 'products')), )
      for (const product of doc_products) {
        data.push(product)
      }
    });

    return data;
  }

  public async createNewAccount(email: string) {
    await setDoc(doc(
      this.firestore, `users/${email}`
    ), {
      company_manager: false,
      orders: []
    })
  }

  public async addNewValueToArray(newValue: any, path: string, domain: string) {
    await updateDoc(
      doc(
        this.firestore,
        path
      ),
      {
        [domain]: arrayUnion(newValue)
      }
    )
  }

  async fetchOrders(value: string, key: string) {
    const docs = await getDocs(query(collection(this.firestore, 'orders/'), where(key, '==', value)))
    const result = [];
    for (const document of docs.docs) {
      result.push(document.data());
    }
    return result;
  }

  async addOrder(order: IOrder) {
    const randomID = (): string => {
      let outString: string = '';
      let inOptions: string = '0123456789';
      for (let i = 0; i < 16; i++) {
        outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
      }
      return outString;
    }
    order.Id = randomID();
    const addOrderDoc = doc(this.firestore, `orders/${order.Id}`)
    await setDoc(addOrderDoc, order);
  }

  async updateOrder(order: any) {
    console.log(order.Id);
    const updateOrderDoc = doc(this.firestore, `orders/${order.Id}`);
    await updateDoc(updateOrderDoc, order);
  }
}
