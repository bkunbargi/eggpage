import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { AboutComponent } from './about/about.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    HomeSplashComponent,
    AboutComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
