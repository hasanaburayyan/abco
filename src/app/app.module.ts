import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EgretComponent } from './egret/egret.component';

const appRoutes: Routes = [
  {path: 'egret', component: EgretComponent},
  {path: '**', component: HomeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    EgretComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: true}
        )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
