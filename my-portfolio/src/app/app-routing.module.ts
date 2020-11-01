import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ServicesComponent} from "./components/services/services.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
