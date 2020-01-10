import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  getAllPositions(): Observable<any[]> {
    return this.db.collection('positions').valueChanges();
  }

  updateMyPosition(myUserName: string, position: any): Promise<any> {
    return this.db.collection('positions').doc(myUserName).set({
      position
    }, {
      merge: true
    });
  }
}
