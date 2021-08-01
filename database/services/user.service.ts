import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore,) { }

  getAllUsers(): Observable<any[]> {
    return this.db.collection('users').valueChanges();
  }
}
