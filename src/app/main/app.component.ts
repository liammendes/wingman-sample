import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { environment } from '../../environments/environment';
import * as client from 'twilio';

const accountSid = 

firebase.initializeApp(environment.firebase);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  steps = [1, 2, 3, 4, 5];
  currentStep = 0;
  user;
  recaptchaVerifier;
  ui;
  constructor(public authentication: AngularFireAuth) {
    this.user = authentication.user;
  }
  ngAfterViewInit() {
    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  }
  login() {
    this.ui.start('#firebaseui-auth-container', {
      // Popup signin flow rather than redirect flow.
      callbacks: {
        signInSuccessWithAuthResult: ((authResult, redirectUrl) => {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.error("YAAAAAAAYAYYYAYYAYYAY IT WORKSSS!!!!!! also Liam was here! ;)");
          return true;
        })},
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }
  logout() {
    this.authentication.signOut();
  }
}

