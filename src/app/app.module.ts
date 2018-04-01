import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';

import { DeviceComponent } from './components/device/device.component';
import { DeviceService } from './services/device.service';
import { GarbageComponent } from './components/garbage/garbage.component';
import { GarbageService } from './services/garbage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    DeviceComponent,
    LoginComponent,
    GarbageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [UserService, DeviceService, GarbageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
