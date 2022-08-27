import {FirebaseApp} from "firebase/app";
import {initializeAuth, setPersistence, createUserWithEmailAndPassword
  , signInWithEmailAndPassword, onAuthStateChanged, signOut, browserLocalPersistence, sendPasswordResetEmail} from "firebase/auth";

export class AuthenticationService {
  private readonly authentication;

  constructor(firebase: FirebaseApp) {
    this.authentication = initializeAuth(firebase);
  }

  public async createNewAccount(email: string, password: string) {
    await createUserWithEmailAndPassword(this.authentication, email, password);
  }

  public async login(email: string, password: string) {
    await setPersistence(this.authentication, browserLocalPersistence);
    await signInWithEmailAndPassword(this.authentication, email, password);
  }

  public async logout() {
    await signOut(this.authentication);
  }

  public setAuthOnChangeState(callback: any) {
    onAuthStateChanged(this.authentication, callback);
  }

  public getUser() {
    return this.authentication.currentUser;
  }

  async resetPassword(email: string) {
    await sendPasswordResetEmail(this.authentication, email);
  }
}
