import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { StorageService } from './storage.service';
import { User } from '../@models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private storage: StorageService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        // console.log("in auth state");
        this.storage.set('user', this.userData);
      } else {
        this.storage.set('user', null);
      }
    });
  }

  SignUp(name: string, mobile: string, email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(
      (result: any) => {
        const user = { ...result.user };
        user.displayName = name;
        user.mobile = mobile;
        // console.log("in signup state");
        this.SetUserDate(user);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  LogIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      (result) => {
        this.SetUserDate(result.user);
        return {type:'success',result:result.user}
      },
      (error) => {
        return {type:'error',message:error.message};        
      }
    );
  }

  // Sign out
  LogOut() {
    return this.afAuth.signOut().then(() => {
      this.storage.clear();
      this.router.navigate(['']);
    });
  }

  SetUserDate(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      mobile: user.mobile?user.mobile:"",
      role: "patient",
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  get isLoggedIn(): boolean {
    const user = this.storage.get('user');
    return user !== null && user.uid ? true : false;
  }
  get getUserRole(): string {
    const user = this.storage.get('user');
    return user !== null && user.uid ? "true" : "false";
  }
}