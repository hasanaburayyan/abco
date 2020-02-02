import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VideoComponent } from './video/video.component';
import { WhyAbcoComponent } from './why-abco/why-abco.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { DownloadCatalogComponent } from './download-catalog/download-catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { SettingPopupComponent } from './setting-popup/setting-popup.component';
import { FbPopupComponent } from './fb-popup/fb-popup.component';
import { DirectionsComponent } from './directions/directions.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormService} from './services/form.service';

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: '**', component: AppComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    ProductsComponent,
    AboutusComponent,
    RewardsComponent,
    VideoComponent,
    WhyAbcoComponent,
    TestimonialComponent,
    PricingComponent,
    SubscribeComponent,
    DownloadCatalogComponent,
    ContactUsComponent,
    FooterComponent,
    SettingPopupComponent,
    FbPopupComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
