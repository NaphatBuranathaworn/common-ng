import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';
import { UnauthLayoutComponent } from './core/layout/unauth-layout/unauth-layout.component';
import { ProjectLayoutComponent } from './core/layout/project-layout/project-layout.component';


const routes: Routes = [

  {
    path: '',
    component: ProjectLayoutComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
      }
    ]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'manage-product',
        loadChildren: () => import('./modules/manage-product/manage-product.module').then(m => m.ManageProductModule)
      }
    ]
  },
  {
    path: '',
    component: UnauthLayoutComponent,
    loadChildren: () => import('./modules/unauth/unauth.module').then(m => m.UnauthModule)
  },


  // {
  //   path: 'unauth',
  //   loadChildren: () => import('./modules/unauth/unauth.module').then(m => m.UnauthModule)
  // },


  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
