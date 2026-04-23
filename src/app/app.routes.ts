import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { AnimalDetail } from './pages/animal-detail/animal-detail';
import { Adoptions } from './pages/adoptions/adoptions';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: 'animal/:id', component: AnimalDetail },
  { path: 'adoptions', component: Adoptions }
];