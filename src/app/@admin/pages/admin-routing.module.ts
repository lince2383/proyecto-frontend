import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
    {
    path:'',// vacio porque directamente entrara al dashboard
    loadChildren:() => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)

    },
    {
    path:'users',
    loadChildren:() => import('./users/users.module').then(m=>m.UsersModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
