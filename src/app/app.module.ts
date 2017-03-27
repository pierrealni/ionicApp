import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InstitutionsListComponent } from '../pages/institutions/institutions-list';
import { AdmissionExamsListComponent } from '../pages/admissionExams/admissionExams-list';
import { QuestionsHandlerComponent } from '../pages/questions/questions-handler';
import { QuestionComponent } from '../pages/questions/question';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/Rx';

import { AngularFireModule } from 'angularfire2';

//import {initializeApp,database} from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyAoofg8syaUxrupniYGdYq3xbvUAQlriAQ",
    authDomain: "charku-5a4af.firebaseapp.com",
    databaseURL: "https://charku-5a4af.firebaseio.com",
    storageBucket: "charku-5a4af.appspot.com",
    messagingSenderId: "287164398082"
  };

//initializeApp(firebaseConfig);
//database().ref('institutions/UNMSM').on('value', snapshot => console.log(snapshot.val()));

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InstitutionsListComponent,
    AdmissionExamsListComponent,
    QuestionsHandlerComponent,
    QuestionComponent
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InstitutionsListComponent,
    AdmissionExamsListComponent,
    QuestionsHandlerComponent,
    QuestionComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
