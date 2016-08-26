import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment.dev';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';




// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCIvTS8NcOUBqH0swRZduKCsWcQ0IluFzA",
    authDomain: "newtest-ea0a1.firebaseapp.com",
    databaseURL: "https://newtest-ea0a1.firebaseio.com",
    storageBucket: "newtest-ea0a1.appspot.com",
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);
