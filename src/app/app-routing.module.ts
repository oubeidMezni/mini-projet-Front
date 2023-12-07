import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahComponent } from './dashboard/dah/dah.component';
import { AddfoyerComponent } from './dashboard/addfoyer/addfoyer.component';
import { ListefoyerComponent } from './dashboard/listefoyer/listefoyer.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DahComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path:"addfoyer", component: AddfoyerComponent
  },
  {
    path:"listefoyer",component:ListefoyerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
