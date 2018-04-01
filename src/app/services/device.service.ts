import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} 
from 'angularfire2/firestore';
import {Device} from '../models/Device';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DeviceService {
	deviceCollection: AngularFirestoreCollection<Device>;
	device: Observable<Device[]>;
  constructor(public afs: AngularFirestore){
  	this.device = this.afs.collection('Device').valueChanges();
  	}

  getDevice(){
  	return this.device;
  }
}

interface device {
	DeviceId?: string;
	DeviceName?: string;
	UserId?: string;
}