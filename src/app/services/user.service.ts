import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} 
from 'angularfire2/firestore';
import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {
	userCollection: AngularFirestoreCollection<User>;
	user: Observable<User[]>;
  constructor(public afs: AngularFirestore) { 
  	this.user = this.afs.collection('user').valueChanges();
  }

  getUser(){
  	return this.user;
  }
}

interface user {
	Address?: string;
	Age?: number;
	Gender?: string;
	Household?: string;
	Id?: string;
	Name?: string;
}