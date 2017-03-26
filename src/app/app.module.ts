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
    HttpModule
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
