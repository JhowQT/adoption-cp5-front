import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { AnimalDetail } from './pages/animal-detail/animal-detail';
import { Adoptions } from './pages/adoptions/adoptions';
import { AdoptionStatus } from './pages/adoption-status/adoption-status';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: 'animal/:id', component: AnimalDetail },

  // 🔥 LISTA
  { path: 'adoptions', component: Adoptions },

  // 🔥 NOVA TELA DE STATUS
  { path: 'adoption-status', component: AdoptionStatus },

  { path: '**', redirectTo: '' }
];
