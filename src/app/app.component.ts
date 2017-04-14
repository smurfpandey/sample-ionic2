import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

declare var DronaHQ: any;

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = TabsPage;

  constructor(statusBar: StatusBar, splashScreen: SplashScreen) {
    
    document.addEventListener('deviceready', function(){
      var fnSuccess = function (uData) {
        console.log('User ID: ' + uData.uid);
        console.log('User Name: ' + uData.name);
        console.log('User Email: ' + uData.email);
        console.log('User Designation: ' + uData.designation);
        console.log('User Profile Image: ' + uData.profile_image);
        console.log('User Nonce: ' + uData.nonce);

        alert(JSON.stringify(uData));
      };

      var fnError = function (err) {
        console.error('Failed to load user info. Error: ' + err);
      };

      DronaHQ.user.getProfile(fnSuccess, fnError);
    })
  }
}
