import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutComponent } from '../pages/about/about.component';
import { InstitutionsListComponent } from '../pages/institutions/institutions-list.component';
import { AdminOptionsListComponent } from '../pages/admin/admin-options-list.component';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage = InstitutionsListComponent;
  rootPage = HomePage;

  pages: Array<{ title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Instituciones', component: InstitutionsListComponent },
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutComponent},
      { title: 'Admin', component: AdminOptionsListComponent}
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

}
