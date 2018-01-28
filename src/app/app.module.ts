import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
// import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GithubServiceProvider } from '../providers/github-service/github.service';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    // HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GithubServiceProvider
  ]
})
export class AppModule {}
