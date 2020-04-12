import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SliderComponent} from './slider/slider.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {TrainersPageComponent} from './trainers-page/trainers-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ProgramPageComponent} from './program-page/program-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomePageComponent,
    NewsPageComponent,
    TrainersPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ProgramPageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
