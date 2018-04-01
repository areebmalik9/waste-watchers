import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} 
from 'angularfire2/firestore';
import {Garbage} from '../models/Garbage';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GarbageService {
    garbageCollection: AngularFirestoreCollection<Garbage>;
    garbage: Observable<Garbage[]>;
    
    constructor(public afs: AngularFirestore) { 
      this.garbage = this.afs.collection('Garbage').valueChanges();
    }

  getGarbage(){
  	return this.garbage;
  }

}
