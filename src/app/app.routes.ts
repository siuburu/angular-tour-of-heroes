import { Routes } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

export const routes: Routes = [
  { path: 'heroes', title: 'Heroes', component: HeroesComponent},
  {path: 'dashboard', title: 'Dashboard', component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent}
];
