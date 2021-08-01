import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private db: AngularFirestore,) { }

  getCollection(): Observable<any[]> {
    return this.db.collection('test').valueChanges();
  }
}
