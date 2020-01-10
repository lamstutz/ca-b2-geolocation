import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Position } from './../../models/position.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  getAllPositions(): Observable<any[]> {
    return this.db.collection('positions').valueChanges();
  }

  updateMyPosition(username: string, position: Position): Promise<any> {
    return this.db.collection('positions').doc(username).set({
      username,
      position
    }, {
      merge: true
    });
  }
}
