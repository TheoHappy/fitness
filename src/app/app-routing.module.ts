import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {TrainersPageComponent} from './trainers-page/trainers-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ProgramPageComponent} from './program-page/program-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'program-page', component: ProgramPageComponent},
  {path: 'news-page', component: NewsPageComponent},
  {path: 'trainers-page', component: TrainersPageComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'contact-page', component: ContactPageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
