import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { CreateCandidateComponent } from './pages/create/create-candidate/create-candidate.component';
import { CreatePositionComponent } from './pages/create/create-position/create-position.component';
import { EditCandidateComponent } from './pages/edit/edit-candidate/edit-candidate.component';
import { EditPositionComponent } from './pages/edit/edit-position/edit-position.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';


const mainRoute: Route = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
};
const homeRoute: Route = {
  path: 'home',
  component: HomeComponent,
};
const storetRoute: Route = {
  path: 'store',
  component: StoreComponent,
};
const creatingRoute: Route = {
  path: 'create',
  children: [
    {
      path: '',
      redirectTo: 'candidate',
      pathMatch: 'full',
    },
    {
      path: 'candidate',
      component: CreateCandidateComponent,
    },
    {
      path: 'position',
      component: CreatePositionComponent,
    },
  ],
};
const editingRoute: Route = {
  path: 'edit',
  children: [
    {
      path: '',
      redirectTo: 'candidate',
      pathMatch: 'full',
    },
    {
      path: 'candidate',
      children: [
        {
          path: ':id',
          component: EditCandidateComponent,
        },
      ],
    },
    {
      path: 'position',
      children: [
        {
          path: ':id',
          component: EditPositionComponent,
        },
      ],
    },
  ],
};

export const routes: Routes = [
  mainRoute,
  homeRoute,
  storetRoute,
  creatingRoute,
  editingRoute,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
