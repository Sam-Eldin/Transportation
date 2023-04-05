import {FirebaseApp} from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  arrayUnion,
  updateDoc,
  query,
  collection,
  getDocs,
  where
} from "firebase/firestore";
import {ICardData} from "../../customer/products/common/card.interface,ts";
import {IOrder} from "../../customer/products/common/order.interface";

export class FirestoreService {
  private readonly firestore;

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
// getProductsFromSupplier(supplierId: string) {
  //   return new Promise<any>((resolve)=> {
  //     this.db.collection('Product', ref => ref.where('supplierId', '==', supplierId).orderBy('inStock').startAt(0).limit(1)).valueChanges().subscribe(product => resolve(product))
  //   })
  // }
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
